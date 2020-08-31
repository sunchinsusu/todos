package com.ntt.todos;//package com.linxone;
import com.ntt.todos.entity.Account;
import com.ntt.todos.entity.Role;
import com.ntt.todos.repository.AccountRepository;
import com.ntt.todos.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class Seeding implements ApplicationListener<ContextRefreshedEvent> {
	@Autowired
    private AccountRepository accountRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent arg0) {

        if (roleRepository.findByName("ROLE_ADMIN") == null) {
            roleRepository.save(new Role("ROLE_ADMIN"));
        }

        if (roleRepository.findByName("ROLE_USER") == null) {
            roleRepository.save(new Role("ROLE_USER"));
        }

        if (accountRepository.findByUsername("admin") == null) {
            Account admin = new Account();
            admin.setUsername("admin");
            admin.setPassword(passwordEncoder.encode("1"));
            List<Role> roles = new ArrayList<>();
            roles.add(roleRepository.findByName("ROLE_ADMIN"));
            admin.setRoles(roles);
            accountRepository.save(admin);
        }

        if (accountRepository.findByUsername("user") == null) {
            Account user = new Account();
            user.setUsername("user");
            user.setPassword(passwordEncoder.encode("1"));
            List<Role> roles = new ArrayList<>();
            roles.add(roleRepository.findByName("ROLE_USER"));
            user.setRoles(roles);
            accountRepository.save(user);
        }
    }
}
