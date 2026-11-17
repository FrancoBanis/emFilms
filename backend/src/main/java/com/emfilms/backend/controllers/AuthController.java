package com.emfilms.backend.controllers;

import com.emfilms.backend.configuration.AppSettings;
import com.emfilms.backend.dto.AuthResponseDTO;
import com.emfilms.backend.dto.LoginDTO;
import com.emfilms.backend.dto.UserRegistrationDTO;
import com.emfilms.backend.entities.Cinephile;
import com.emfilms.backend.services.JwtService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import com.emfilms.backend.services.CinephileService;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = AppSettings.URL_CROSS_ORIGIN)
public class AuthController {
    @Autowired
    private CinephileService cinephileService;
    @Autowired
    private JwtService jwtService;
     @Autowired
     private AuthenticationManager authenticationManager;
    @PostMapping("/register")
    @ResponseBody
    public ResponseEntity<AuthResponseDTO> newUserRegistration(@RequestBody @Valid UserRegistrationDTO userDTO){
        Cinephile saved = cinephileService.save(userDTO);
        String token = jwtService.generateToken(saved);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new AuthResponseDTO(token, saved.getNickName(), saved.getEmail()));
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid LoginDTO dto) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(dto.email(),dto.password()));
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Invalid credentials"));
        }
        Cinephile user = (Cinephile) cinephileService.loadUserByUsername(dto.email());
        String token = jwtService.generateToken(user);
        return ResponseEntity.ok(new AuthResponseDTO(token, user.getNickName(), user.getEmail()));
    }
    @GetMapping("/me")
    public ResponseEntity<AuthResponseDTO> me(@AuthenticationPrincipal Cinephile user) {
        return ResponseEntity.ok(new AuthResponseDTO(null, user.getNickName(), user.getEmail()));
    }

}
