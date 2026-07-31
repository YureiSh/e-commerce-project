package com.ecom.project.dto.response;

import com.ecom.project.entity.OrderProduct;

public record OrderProductResponse(
        Long productId,
        Integer count,
        String detail
) {
    public static OrderProductResponse from(OrderProduct op) {
        return new OrderProductResponse(
                op.getProduct().getId(),
                op.getCount(),
                op.getDetail()
        );
    }
}
