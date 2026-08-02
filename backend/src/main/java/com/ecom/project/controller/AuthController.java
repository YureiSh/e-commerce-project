package com.ecom.project.controller;

import com.ecom.project.dto.request.LoginRequest;
import com.ecom.project.dto.request.RegisterRequest;
import com.ecom.project.dto.response.LoginResponse;
import com.ecom.project.entity.User;
import com.ecom.project.service.AuthService;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<String> register(@Valid @RequestBody RegisterRequest request){
        String response = authService.register(request);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request){
        LoginResponse response = authService.login(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/verify")
    public ResponseEntity<LoginResponse> verify(
            @AuthenticationPrincipal User user,
            @RequestHeader("Authorization") String token) {
        return authService.verify(user, token);
    }

}
