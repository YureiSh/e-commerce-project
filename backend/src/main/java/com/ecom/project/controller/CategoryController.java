package com.ecom.project.controller;

import com.ecom.project.entity.Category;
import com.ecom.project.service.CategoryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping("/categories")
    public ResponseEntity<List<Category>> getCategories(){
        List<Category> categoryList = categoryService.findAllCategoriesGenderSorted();
        return ResponseEntity.ok(categoryList);
    }

}
