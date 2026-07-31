package com.ecom.project.dto.request;

import java.util.List;

public record OrderRequest(
        String name,
        String surname,
        String phone,
        String city,
        String district,
        String neighborhood,
        String nameOnCard,
        String lastFour,
        String expireMonth,
        String expireYear,
        List<OrderProductRequest> products   // dizin burada
) {
}
