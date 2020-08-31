package com.ntt.todos.service;

import com.ntt.todos.entity.User;
import com.ntt.todos.repository.AccountRepository;
import com.ntt.todos.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepo;

    @Autowired
    AccountRepository accountRepo;

    @Transactional(rollbackFor = Exception.class)
    public User registry(User user){
        accountRepo.save(user.getAccount());
        userRepo.save(user);
        return user;
    }
}
