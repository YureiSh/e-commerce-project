package com.ecom.project.service;

import com.ecom.project.entity.Category;
import com.ecom.project.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public List<Category> findAllCategoriesGenderSorted(){
        return categoryRepository.findAllCategoriesGenderSorted();
    }

}
