package com.ecom.project.service;

import com.ecom.project.dto.request.CardRequest;
import com.ecom.project.dto.response.CardResponse;
import com.ecom.project.entity.Card;
import com.ecom.project.entity.User;
import com.ecom.project.exception.CardException;
import com.ecom.project.repository.CardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CardService {

    private final CardRepository cardRepository;

    public List<CardResponse> findAllCards(User user) {
        return cardRepository
                .findByUserId(user.getId())
                .stream()
                .map(CardResponse::from)
                .toList();
    }

    @Transactional
    public CardResponse createCard(CardRequest request, User user){
        String cardNo = request.cardNo().trim();
        String token = tokenize(cardNo);

        Card card = new Card();
        card.setUser(user);

        card.setTitle(request.nameOnCard());
        card.setNameOnCard(request.nameOnCard());
        card.setExpireMonth(request.expireMonth());
        card.setExpireYear(request.expireYear());
        card.setLastFour(cardNo.substring(cardNo.length() - 4));
        card.setCardProviderToken(token);

        cardRepository.save(card);

        return CardResponse.from(card);
    }

    @Transactional
    public CardResponse updateCard(CardRequest request,User user, Long cardId){

        Card cardToUpdate = cardRepository.findById(cardId)
                .orElseThrow(()-> new CardException("Card is not found!", HttpStatus.NOT_FOUND));

        if (!cardToUpdate.getUser().getId().equals(user.getId())) {
            throw new CardException("Card is not found!", HttpStatus.NOT_FOUND);
        }

        String token = tokenize(request.cardNo());

        cardToUpdate.setCardProviderToken(token);
        cardToUpdate.setExpireMonth(request.expireMonth());
        cardToUpdate.setExpireYear(request.expireYear());
        cardToUpdate.setNameOnCard(request.nameOnCard());

        cardRepository.save(cardToUpdate);
        return CardResponse.from(cardToUpdate);
    }

    @Transactional
    public String deleteCard(User user, Long cardId) {
        Card cardToDelete = cardRepository.findById(cardId)
                .orElseThrow(() -> new CardException("Card is not found!", HttpStatus.NOT_FOUND));

        if (!cardToDelete.getUser().getId().equals(user.getId())) {
            throw new CardException("Card is not found!", HttpStatus.NOT_FOUND);
        }

        cardRepository.delete(cardToDelete);
        return "Credit card record deleted!";
    }

    private String tokenize(String cardNo) {
        return "tok_fake_" + UUID.randomUUID();
    }

}
