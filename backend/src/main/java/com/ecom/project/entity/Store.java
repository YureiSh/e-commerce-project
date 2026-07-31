package com.ecom.project.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

@Entity
@Table(name = "store", schema = "ecommerce")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@EqualsAndHashCode(of = "id") @Builder
public class Store {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(max = 25)
    @Column(name = "name", nullable = false)
    private String name;

    @NotNull
    @Size(max = 45)
    @Column(name = "phone", nullable = false)
    private String phone;

    @NotNull
    @Size(max = 20)
    @Column(name = "tax_no", nullable = false)
    private String taxNo;

    @NotNull
    @Size(max = 20)
    @Column(name = "bank_account", nullable = false)
    private String bankAccount;
}
