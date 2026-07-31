package com.ecom.project.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record RegisterRequest(

        @Size(max = 155)
        @NotBlank
        String name,

        @Email
        @Size(max = 100)
        @NotBlank
        String email,

        @Size(max = 200)
        @NotBlank
        String password,

        @NotNull
        Long roleId,

        String storeName,
        String storePhone,
        String storeTaxNo,
        String storeBankAccount
) {
}
