package com.ecom.project.service;

import com.ecom.project.dto.request.LoginRequest;
import com.ecom.project.dto.request.RegisterRequest;
import com.ecom.project.dto.response.LoginResponse;
import com.ecom.project.entity.Role;
import com.ecom.project.entity.Store;
import com.ecom.project.entity.User;
import com.ecom.project.exception.AuthException;
import com.ecom.project.repository.RoleRepository;
import com.ecom.project.repository.UserRepository;
import com.ecom.project.util.JwtUtil;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    @Transactional
    public String register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.email()))
            throw new AuthException(request.email(), HttpStatus.CONFLICT);

        Role role = roleRepository.findById(request.roleId())
                .orElseThrow(() -> new AuthException("Geçersiz role_id.", HttpStatus.NOT_FOUND));

        User user = User.builder()
                .name(request.name())
                .email(request.email())
                .password(passwordEncoder.encode(request.password()))
                .role(role)
                .build();

        if ("STORE".equalsIgnoreCase(role.getAuthority())) {
            if (request.storeName() == null)
                throw new AuthException("Mağaza rolü için store bilgisi zorunlu.", HttpStatus.BAD_REQUEST);
            user.setStore(Store.builder()
                    .name(request.storeName())
                    .phone(request.storePhone())
                    .taxNo(request.storeTaxNo())
                    .bankAccount(request.storeBankAccount())
                    .build());
        }

        User saved = userRepository.save(user);
        return "User successfully created";
    }

    @Transactional
    public LoginResponse login(LoginRequest request){
        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new AuthException("Email not found", HttpStatus.NOT_FOUND));

        if(!passwordEncoder.matches(request.password(), user.getPassword())){
            throw new AuthException("Invalid email or password ", HttpStatus.NOT_FOUND);
        }

        String token = jwtUtil.generateToken(user.getEmail());

        return new LoginResponse(
                token,
                user.getName(),
                user.getEmail(),
                user.getRole().getId());
    }

    public ResponseEntity<LoginResponse> verify(User user, String token) {
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        return ResponseEntity.ok(LoginResponse.from(user, token));
    }

}
