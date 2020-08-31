package com.ntt.todos.repository;

import com.ntt.todos.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    User findByAccount_Username(String username);
}
