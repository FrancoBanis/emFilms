package com.emfilms.backend.services;


import com.emfilms.backend.dto.UserRegistrationDTO;
import com.emfilms.backend.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.emfilms.backend.repository.UserRepository;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository accessRepositoryUser;
    @Autowired
    private PasswordEncoder passwordEncoder;
    public User save(UserRegistrationDTO dto) {

        if (!password_equal(dto)) {
            throw new IllegalArgumentException("Password don't match.");
        }
        User newUser = new User(
                dto.getUserName(),
                dto.getEmail(),
                dto.getPassword()
        );
        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
        return accessRepositoryUser.save(newUser);
    }
    public void delete(User u){
        accessRepositoryUser.delete(u);
    }

    public User edit(User u) {
        return accessRepositoryUser.save(u);
    }
    public User findById(Long id) {
        return accessRepositoryUser.findById(id).orElse(null);
    }
    public List<User> findAll() {
        return accessRepositoryUser.findAll();
    }
    private boolean password_equal(UserRegistrationDTO dto) {
        return dto.getPassword().equals(dto.getConfirmPassword());
    }

}
