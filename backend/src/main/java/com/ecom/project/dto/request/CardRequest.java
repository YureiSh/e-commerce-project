package com.ecom.project.dto.request;

public record CardRequest(

        String cardNo,

        String expireMonth,

        String expireYear,

        String nameOnCard
) {
}
