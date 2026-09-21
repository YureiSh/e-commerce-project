package com.ecom.project.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public record OrderProductRequest(

        @NotNull
        Long productId,

        @NotNull
        @Positive
        Integer count,

        @NotNull
        String detail

) {
}
