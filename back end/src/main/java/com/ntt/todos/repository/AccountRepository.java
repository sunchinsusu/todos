package com.ntt.todos.repository;

import com.ntt.todos.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {
	Account findByUsername(String username);
	Account findById(int id);
}
