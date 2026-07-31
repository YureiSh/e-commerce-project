package com.ecom.project.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.OffsetDateTime;

@Entity
@Table(name = "card", schema = "ecommerce")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "app_user_id", nullable = false)
    private User user;

    @NotNull
    @Size(max = 45)
    @Column(name = "title", nullable = false)
    private String title;

    @NotNull
    @Size(max = 155)
    @Column(name = "name_on_card", nullable = false)
    private String nameOnCard;

    @NotNull
    @Size(max = 255)
    @Column(name = "card_provider_token", nullable = false)
    private String cardProviderToken;

    @NotNull
    @Size(max = 4)
    @Column(name = "last_four", nullable = false)
    private String lastFour;

    @NotNull
    @Size(max = 2)
    @Column(name = "expire_month", nullable = false)
    private String expireMonth;

    @NotNull
    @Size(max = 4)
    @Column(name = "expire_year", nullable = false)
    private String expireYear;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private OffsetDateTime createdAt;

}
