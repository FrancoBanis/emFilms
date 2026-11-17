package com.emfilms.backend.controllers;

import com.emfilms.backend.configuration.AppSettings;
import com.emfilms.backend.dto.UserRegistrationDTO;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.emfilms.backend.services.CinephileService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = AppSettings.URL_CROSS_ORIGIN)
public class CinephileController {
    @Autowired
    private CinephileService cinephileService;

    @PostMapping("/register")
    @ResponseBody
    public ResponseEntity<String> newUserRegistration(@RequestBody @Valid UserRegistrationDTO userDTO){
        cinephileService.save(userDTO);
        return ResponseEntity.ok("Succesfully register operation.");
    }



}
