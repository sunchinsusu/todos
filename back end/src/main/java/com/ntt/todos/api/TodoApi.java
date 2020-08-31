package com.ntt.todos.api;

import com.ntt.todos.entity.Todo;
import com.ntt.todos.entity.User;
import com.ntt.todos.repository.TodoRepository;
import com.ntt.todos.repository.UserRepository;
import com.ntt.todos.response.StatResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class TodoApi {
    @Autowired
    TodoRepository todoRepo;
    @Autowired
    UserRepository userRepo;

    private User getUser(){
        User u;
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = "";
        if (principal instanceof UserDetails) {
            username = ((UserDetails) principal).getUsername();
        } else {
            username = principal.toString();
        }
        u = userRepo.findByAccount_Username(username);
       return u;
    }

    public void updateTodoOutOfDate(){
        long millis = System.currentTimeMillis();
        java.sql.Date today = new java.sql.Date(millis);
        for(Todo todo : todoRepo.findByDueDateBefore(today)){
            if(todo.getStatus() != 3){
                todo.setStatus(4);
                todoRepo.save(todo);
            }
        }
    }

    @GetMapping("/todo")
    public ResponseEntity<List<Todo>>  getAll(){
        List<Todo> todos = todoRepo.findByUser(getUser());
        for(Todo todo : todos){
            todo.setUser(null);
        }
        return new ResponseEntity<>(todos, HttpStatus.OK);
    }

    @GetMapping("/todo/stat")
    public ResponseEntity<StatResponse> stat(){
        updateTodoOutOfDate();
        StatResponse response = new StatResponse(
                                                todoRepo.countByStatusAndUser(1,getUser()),
                                                todoRepo.countByStatusAndUser(2,getUser()),
                                                todoRepo.countByStatusAndUser(3,getUser()),
                                                todoRepo.countByStatusAndUser(4,getUser())
                                                );
        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    @GetMapping("/todo/status/{status}")
    public ResponseEntity<List<Todo>> getByStatus(@PathVariable(name = "status")int status){
        return new ResponseEntity<>(todoRepo.findByStatusAndUser(status,getUser()),HttpStatus.OK);
    }

    @GetMapping("/todo/id/{id}")
    public ResponseEntity<Todo> getById(@PathVariable(name = "id")int id){
        return new ResponseEntity<>(todoRepo.findByIdAndUser(id,getUser()),HttpStatus.OK);
    }

    @PostMapping("/todo")
    public ResponseEntity<Todo> add(@RequestBody Todo todo){
        todo.setStatus(1);
        todo.setUser(getUser());
        return new ResponseEntity<>(todoRepo.save(todo),HttpStatus.OK);
    }

    @PutMapping("/todo")
    public ResponseEntity<Todo> update(@RequestBody Todo todo){
        Todo t = todoRepo.findByIdAndUser(todo.getId(),getUser());
        if(t!=null) {
            t.setTitle(todo.getTitle());
            t.setDate(todo.getDate());
            t.setDueDate(todo.getDueDate());
            t.setDes(todo.getDes());
            t.setStatus(todo.getStatus());
            todoRepo.save(t);
        }
        return new ResponseEntity<>(t,HttpStatus.OK);
    }

    @PutMapping("/todo/next-step/{id}")
    public ResponseEntity<Todo> update(@PathVariable(name = "id")int id){
        Todo todo = todoRepo.findByIdAndUser(id,getUser());
        if(todo != null){
            int status = todo.getStatus();
            if(status == 1){
                todo.setStatus(2);
            }
            else if(status == 2 ){
                todo.setStatus(3);
            }
            todoRepo.save(todo);
        }
        todo.setUser(null);
        return new ResponseEntity<>(todo,HttpStatus.OK);
    }

    @DeleteMapping("/todo/{id}")
    public ResponseEntity<Object> delete(@PathVariable(name = "id")int id){
        todoRepo.deleteByIdAndUser(id,getUser());
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
