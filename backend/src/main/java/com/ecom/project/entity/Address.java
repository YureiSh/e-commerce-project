package com.ecom.project.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.OffsetDateTime;

@Entity
@Table(name = "address", schema = "ecommerce")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Address {

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
    @Size(max = 45)
    @Column(name = "name", nullable = false)
    private String name;

    @NotNull
    @Size(max = 45)
    @Column(name = "surname", nullable = false)
    private String surname;

    @NotNull
    @Size(max = 45)
    @Column(name = "phone", nullable = false)
    private String phone;

    @Size(max = 45)
    @Column(name = "city")
    private String city;

    @Size(max = 45)
    @Column(name = "district")
    private String district;

    @Size(max = 45)
    @Column(name = "neighborhood")
    private String neighborhood;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private OffsetDateTime createdAt;
}
