package com.ecom.project.repository;

import com.ecom.project.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    @Query("""
       SELECT c FROM Category c
       ORDER BY
         CASE WHEN LOWER(c.gender) = 'k' THEN 0 ELSE 1 END
       """)
    List<Category> findAllCategoriesGenderSorted();

}

