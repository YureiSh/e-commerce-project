package com.ecom.project.controller;

import com.ecom.project.dto.request.AddressRequest;
import com.ecom.project.dto.response.AddressResponse;
import com.ecom.project.entity.User;
import com.ecom.project.service.AddressService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController @RequestMapping("/user")
@RequiredArgsConstructor
public class AddressController {

    private final AddressService addressService;

    @GetMapping("/address")
    public ResponseEntity<List<AddressResponse>> getMyAddresses(@AuthenticationPrincipal User user){
        return ResponseEntity.ok(addressService.findAllAddresses(user));
    }

    @PostMapping("/address")
    public ResponseEntity<AddressResponse> createAddress(@AuthenticationPrincipal User user, @Valid @RequestBody AddressRequest request){
        return ResponseEntity.status(HttpStatus.CREATED).body(addressService.createAddress(request, user));
    }

    @PutMapping("/address/{id}")
    public ResponseEntity<AddressResponse> updateAddress(@AuthenticationPrincipal User user, @Valid @RequestBody AddressRequest request,
                                                         @PathVariable("id") Long addressId ){
        return ResponseEntity.ok(addressService.updateAddress(request,user,addressId));
    }

    @DeleteMapping("/address/{id}")
    public ResponseEntity<String> deleteAddress(@AuthenticationPrincipal User user, @PathVariable("id") Long addressId){
        return ResponseEntity.ok(addressService.deleteAddress(user,addressId));
    }

}
