package com.emfilms.backend.controllers;

import com.emfilms.backend.configuration.AppSettings;
import com.emfilms.backend.dto.UserRegistrationDTO;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.emfilms.backend.services.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = AppSettings.URL_CROSS_ORIGIN)
public class UserController{
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    @ResponseBody
    public ResponseEntity<String> newUserRegistration(@RequestBody @Valid UserRegistrationDTO userDTO){
        userService.save(userDTO);
        return ResponseEntity.ok("Succesfully register operation.");
    }



}
