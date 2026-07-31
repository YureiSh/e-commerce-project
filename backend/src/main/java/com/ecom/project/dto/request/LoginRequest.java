package com.ecom.project.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record LoginRequest(
        @Email
        @Size(max = 155)
        @NotBlank(message = "Email is required!")
        String email,

        @Size(max = 200)
        @NotBlank(message = "Password is required!")
        String password
) {
}
