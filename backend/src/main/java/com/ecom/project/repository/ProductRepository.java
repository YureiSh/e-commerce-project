package com.ecom.project.repository;

import com.ecom.project.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(value = """
    SELECT * FROM ecommerce.product p
    WHERE (:categoryId IS NULL OR p.category_id = :categoryId)
      AND (CAST(:filter AS text) IS NULL
           OR LOWER(p.name)        LIKE LOWER('%' || CAST(:filter AS text) || '%')
           OR LOWER(p.description) LIKE LOWER('%' || CAST(:filter AS text) || '%'))
    """,
            countQuery = """
    SELECT count(*) FROM ecommerce.product p
    WHERE (:categoryId IS NULL OR p.category_id = :categoryId)
      AND (CAST(:filter AS text) IS NULL
           OR LOWER(p.name)        LIKE LOWER('%' || CAST(:filter AS text) || '%')
           OR LOWER(p.description) LIKE LOWER('%' || CAST(:filter AS text) || '%'))
    """,
            nativeQuery = true)
    Page<Product> search(
            @Param("categoryId") Long categoryId,
            @Param("filter") String filter,
            Pageable pageable
    );

}
