package com.ntt.todos.repository;

import com.ntt.todos.entity.Todo;
import com.ntt.todos.entity.User;
import com.ntt.todos.response.StatResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo,Integer> {
    List<Todo> findByUser(User user);
    List<Todo> findByTitleIsContaining(String title);
    List<Todo> findByStatusAndUser(int status, User user);
    Todo findByIdAndUser(int id, User user);
    void deleteByIdAndUser(int id,User user);
    int countByStatusAndUser(int status, User user);
    List<Todo> findByDueDateBefore(Date date);
}
