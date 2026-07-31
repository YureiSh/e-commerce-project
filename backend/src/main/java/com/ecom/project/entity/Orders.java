package com.ecom.project.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "orders", schema = "ecommerce")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

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
    @Column(name = "order_date", nullable = false, updatable = false)
    private OffsetDateTime orderDate;

    @NotNull
    @Size(max = 155)
    @Column(name = "name_on_card", nullable = false)
    private String nameOnCard;

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

    @NotNull
    @Column(name = "price", precision = 10, scale = 2, nullable = false)
    private BigDecimal price;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<OrderProduct> orderProducts = new HashSet<>();

    public void addOrderProduct(OrderProduct orderProduct){
        orderProducts.add(orderProduct);
        orderProduct.setOrder(this);
    }

    public void removeOrderProduct(OrderProduct orderProduct){
        orderProducts.remove(orderProduct);
        orderProduct.setOrder(null);
    }


}
