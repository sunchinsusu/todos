package com.ntt.todos.api;
import com.ntt.todos.entity.Account;
import com.ntt.todos.entity.Role;
import com.ntt.todos.entity.User;
import com.ntt.todos.repository.AccountRepository;
import com.ntt.todos.repository.RoleRepository;
import com.ntt.todos.repository.UserRepository;
import com.ntt.todos.request.Registry;
import com.ntt.todos.security.*;
import com.ntt.todos.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping()
public class BaseApi {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    MyUserDetailsService myUserDetailsService;
    @Autowired
    JwtTokenProvider jwtProvider;
    @Autowired
    AccountRepository accountRepo;
    @Autowired
    UserService userService;
    @Autowired
    UserRepository userRepo;
    @Autowired
    RoleRepository roleRepo;
    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping("/signin")
    public ResponseEntity<JwtResponse> checkLogin(@RequestBody JwtRequest jwtRequest){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        jwtRequest.getUsername(),
                        jwtRequest.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtProvider.createToken(( (MyUserDetails) authentication.getPrincipal()).getUsername());
        JwtResponse jwtResponse = new JwtResponse(userRepo.findByAccount_Username(((MyUserDetails) authentication.getPrincipal()).getUsername()).getName() , jwt);
        return new ResponseEntity<>(jwtResponse, HttpStatus.ACCEPTED);
    }

    @PostMapping("/registry")
    public ResponseEntity<JwtResponse> registry(@RequestBody Registry registry){
        try {
            User u = new User();
            u.setName(registry.getName());

            Account a = new Account();

            List<Role> roles = new ArrayList<>();
            roles.add(roleRepo.findByName("ROLE_USER"));

            a.setRoles(roles);
            a.setUsername(registry.getUsername());
            a.setPassword(passwordEncoder.encode(registry.getPassword()));

            u.setAccount(a);
            userService.registry(u);

            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(registry.getUsername(), registry.getPassword())
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);

            String jwt = jwtProvider.createToken(( (MyUserDetails) authentication.getPrincipal()).getUsername());

            JwtResponse jwtResponse = new JwtResponse(registry.getName(), jwt);
            return new ResponseEntity<>(jwtResponse, HttpStatus.ACCEPTED);
        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

}
