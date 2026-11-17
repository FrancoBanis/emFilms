package com.emfilms.backend.services;


import com.emfilms.backend.dto.UserRegistrationDTO;
import com.emfilms.backend.entities.Cinephile;
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
    public Cinephile save(UserRegistrationDTO dto) {

        if (!password_equal(dto)) {
            throw new IllegalArgumentException("Password don't match.");
        }
        Cinephile newCinephile = new Cinephile(
                dto.getUserName(),
                dto.getEmail(),
                dto.getPassword()
        );
        newCinephile.setPassWord(passwordEncoder.encode(newCinephile.getPassWord()));
        return accessRepositoryUser.save(newCinephile);
    }
    public void delete(Cinephile u){
        accessRepositoryUser.delete(u);
    }

    public Cinephile edit(Cinephile u) {
        return accessRepositoryUser.save(u);
    }
    public Cinephile findById(Long id) {
        return accessRepositoryUser.findById(id).orElse(null);
    }
    public List<Cinephile> findAll() {
        return accessRepositoryUser.findAll();
    }
    private boolean password_equal(UserRegistrationDTO dto) {
        return dto.getPassword().equals(dto.getConfirmPassword());
    }

}
