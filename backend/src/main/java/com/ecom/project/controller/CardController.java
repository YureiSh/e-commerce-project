package com.ecom.project.controller;

import com.ecom.project.dto.request.CardRequest;
import com.ecom.project.dto.response.CardResponse;
import com.ecom.project.entity.User;
import com.ecom.project.service.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController @RequestMapping("/user")
@RequiredArgsConstructor
public class CardController {

    private final CardService cardService;

    @GetMapping("/card")
    public ResponseEntity<List<CardResponse>> getMyCards(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(cardService.findAllCards(user));
    }

    @PostMapping("/card")
    public ResponseEntity<CardResponse> createCard(@AuthenticationPrincipal User user, @RequestBody CardRequest request){
        return ResponseEntity.status(HttpStatus.CREATED).body(cardService.createCard(request, user));
    }

    @PutMapping("/card/{id}")
    public ResponseEntity<CardResponse> updateCard(@AuthenticationPrincipal User user, @RequestBody CardRequest request,
                                                   @PathVariable("id") Long cardId ){
        return ResponseEntity.ok(cardService.updateCard(request,user,cardId));
    }

    @DeleteMapping("/card/{id}")
    public ResponseEntity<String> deleteCard(@AuthenticationPrincipal User user, @PathVariable("id") Long cardId){
        return ResponseEntity.ok(cardService.deleteCard(user,cardId));
    }
}
