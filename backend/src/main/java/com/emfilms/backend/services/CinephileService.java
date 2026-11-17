package com.emfilms.backend.services;


import com.emfilms.backend.dto.UserRegistrationDTO;
import com.emfilms.backend.entities.Cinephile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.emfilms.backend.repository.CinephileRepository;

import java.util.List;

@Service
public class CinephileService implements UserDetailsService {
    @Autowired
    CinephileRepository cinephileRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    public Cinephile save(UserRegistrationDTO dto) {
        if (!password_equal(dto)) {
            throw new IllegalArgumentException("Password don't match.");
        }
        if (cinephileRepository.existsByEmail(dto.getEmail())) {
            throw new IllegalArgumentException("Email already registered.");
        }
        Cinephile newCinephile = new Cinephile(
                dto.getNickName(),
                dto.getEmail(),
                passwordEncoder.encode(dto.getPassword())
        );
        return cinephileRepository.save(newCinephile);
    }
    public void delete(Cinephile u){
        cinephileRepository.delete(u);
    }

    public Cinephile edit(Cinephile u) {
        return cinephileRepository.save(u);
    }
    public Cinephile findById(Long id) {
        return cinephileRepository.findById(id).orElse(null);
    }
    public List<Cinephile> findAll() {
        return cinephileRepository.findAll();
    }
    private boolean password_equal(UserRegistrationDTO dto) {
        return dto.getPassword().equals(dto.getConfirmPassword());
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return
               cinephileRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}
