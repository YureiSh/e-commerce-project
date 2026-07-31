package com.ecom.project.dto.response;

import com.ecom.project.entity.Orders;

import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.List;

public record OrderResponse(
        Long id,
        String name,
        String surname,
        String phone,
        String city,
        String district,
        String neighborhood,
        OffsetDateTime orderDate,
        String nameOnCard,
        String lastFour,
        String expireMonth,
        String expireYear,
        BigDecimal price,
        List<OrderProductResponse> products
)  {

    public static OrderResponse from(Orders order) {
        List<OrderProductResponse> items = order.getOrderProducts().stream()
                .map(OrderProductResponse::from)
                .toList();

        return new OrderResponse(
                order.getId(),
                order.getName(),
                order.getSurname(),
                order.getPhone(),
                order.getCity(),
                order.getDistrict(),
                order.getNeighborhood(),
                order.getOrderDate(),
                order.getNameOnCard(),
                order.getLastFour(),
                order.getExpireMonth(),
                order.getExpireYear(),
                order.getPrice(),
                items
        );
    }
}
