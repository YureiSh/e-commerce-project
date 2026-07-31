package com.ecom.project.controller;

import com.ecom.project.dto.request.OrderRequest;
import com.ecom.project.dto.response.OrderResponse;
import com.ecom.project.entity.User;
import com.ecom.project.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/order")
    public OrderResponse createOrder(@AuthenticationPrincipal User user, @RequestBody OrderRequest request){
        return orderService.createOrder(request,user);
    }

}
