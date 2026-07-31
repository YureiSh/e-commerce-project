package com.ecom.project.dto.request;

public record OrderProductRequest(

        Long productId,
        Integer count,
        String detail

) {
}
