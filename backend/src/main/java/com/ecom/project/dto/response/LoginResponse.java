package com.ecom.project.dto.response;

public record LoginResponse(
        String token,
        String name,
        String email,
        Long roleId
) {
}
