package com.ecom.project.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

@Entity
@Table(name = "category", schema = "ecommerce")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(max = 45)
    @Column(name = "code", nullable = false)
    private String code;

    @NotNull
    @Size(max = 45)
    @Column(name = "title", nullable = false)
    private String title;

    @Size(max = 1000)
    @Column(name = "img")
    private String img;

    @Column(name = "rating")
    private Double rating;

    @NotNull
    @Size(max = 2)
    @Column(name = "gender", nullable = false)
    private String gender;

}
