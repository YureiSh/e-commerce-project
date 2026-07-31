package com.ecom.project.dto.response;

import com.ecom.project.entity.Card;

public record CardResponse(
        Long id,
        Long userId,
        String title,
        String nameOnCard,
        String lastFour,
        String expireMonth,
        String expireYear
) {
    public static CardResponse from(Card card) {
        return new CardResponse(
                card.getId(),
                card.getUser().getId(),
                card.getTitle(),
                card.getNameOnCard(),
                card.getLastFour(),
                card.getExpireMonth(),
                card.getExpireYear());
    }
}
