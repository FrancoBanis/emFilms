package com.emfilms.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UserRegistrationDTO {
    @NotBlank (message = "Required field.")
    @Size(min = 4, max = 30, message = "Username must have 4 characters and 30 characters max")
    private String nickName;
    @NotBlank(message = "Required field.")
    @Email
    private String email;
    private String password;
    private String confirmPassword;

    public UserRegistrationDTO(){

    };
    public UserRegistrationDTO(String nickName, String email, String password, String confirmPassword) {
        this.nickName = nickName;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    public String getNickName() {
        return nickName;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }
}
