package com.ecom.project.service;

import com.ecom.project.entity.Product;
import com.ecom.project.exception.GeneralException;
import com.ecom.project.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public Page<Product> search(Long category, String filter, String sort, int limit, int offset) {
        if (category != null && category < 0)
            throw new GeneralException("CategoryId should be positive number", HttpStatus.BAD_REQUEST);

        String normalizedFilter = (filter == null || filter.isBlank()) ? null : filter.trim();

        Pageable pageable = PageRequest.of(offset / limit, limit, parseSort(sort));

        return productRepository.search(category, normalizedFilter, pageable);
    }

    public Product findProduct(Long productId){
        return productRepository.findById(productId)
                .orElseThrow(()-> new GeneralException("Product with the given id is not found: "+ productId, HttpStatus.NOT_FOUND));
    }

    private Sort parseSort(String sort) {
        if (sort == null || sort.isBlank()) {
            return Sort.by(Sort.Direction.ASC, "id");
        }
        String[] parts = sort.split(":");
        Sort.Direction dir = parts.length > 1 && parts[1].equalsIgnoreCase("desc")
                ? Sort.Direction.DESC
                : Sort.Direction.ASC;
        return Sort.by(dir, parts[0]);
    }

}
