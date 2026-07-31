package com.ecom.project.dto.request;

import jakarta.annotation.Nullable;
import jakarta.validation.constraints.NotNull;

public record AddressRequest(

        @NotNull
        String title,
        @NotNull
        String name,
        @NotNull
        String surname,
        @NotNull
        String phone,

        @Nullable
        String city,

        @Nullable
        String district,

        @Nullable
        String neighborhood
) {
}
