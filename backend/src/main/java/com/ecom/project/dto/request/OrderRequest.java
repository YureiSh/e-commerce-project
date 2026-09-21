package com.ecom.project.dto.request;

import jakarta.annotation.Nullable;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.util.List;

public record OrderRequest(
        @NotBlank
        String name,
        @NotBlank
        String surname,
        @NotBlank
        String phone,

        @Nullable
        String city,

        @Nullable
        String district,

        @Nullable
        String neighborhood,

        @NotBlank
        String nameOnCard,

        @NotBlank
        String lastFour,

        @NotBlank
        @NotNull
        String expireMonth,

        @NotBlank
        @NotNull
        String expireYear,

        @NotEmpty //List için daha doğru
        @Valid
        List<OrderProductRequest> products   // dizin burada
) {
}
