package com.ecom.project.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "product", schema = "ecommerce")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(max = 155)
    @Column(name = "name", nullable = false)
    private String name;

    @NotNull
    @Size(max = 1000)
    @Column(name = "description", nullable = false, length = 1000)
    private String description;

    @NotNull
    @Column(name = "price", precision = 10, scale = 2, nullable = false)
    private BigDecimal price;

    @NotNull
    @Column(name = "stock", nullable = false)
    private Integer stock;

    @Column(name = "rating")
    private Double rating;

    @NotNull
    @Column(name = "sell_count", nullable = false)
    private Integer sellCount;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(
            name = "product_images",
            schema = "ecommerce",
            joinColumns = @JoinColumn(name = "product_id")
    )
    @OrderColumn(name = "img_index")
    @Column(name = "url", nullable = false, length = 1000)
    private List<String> imageUrls = new ArrayList<>();

}
