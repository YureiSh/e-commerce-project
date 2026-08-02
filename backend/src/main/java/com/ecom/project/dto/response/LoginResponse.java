package com.ecom.project.dto.response;

import com.ecom.project.entity.User;

public record LoginResponse(
        String token,
        String name,
        String email,
        Long roleId
) {
    public static LoginResponse from(User user, String token) {
        return new LoginResponse(
                token,
                user.getName(),
                user.getEmail(),
                user.getRole().getId()
        );
    }
}
