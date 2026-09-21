package com.ecom.project.controller;

import com.ecom.project.dto.request.OrderRequest;
import com.ecom.project.dto.response.OrderResponse;
import com.ecom.project.entity.User;
import com.ecom.project.service.OrderService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @GetMapping("/order")
    public ResponseEntity<List<OrderResponse>> getOrders(@AuthenticationPrincipal User user){
        return ResponseEntity.ok(orderService.getAllOrders(user));
    }

    @PostMapping("/order")
    public OrderResponse createOrder(@AuthenticationPrincipal User user, @Valid @RequestBody OrderRequest request){
        return orderService.createOrder(request,user);
    }

}
