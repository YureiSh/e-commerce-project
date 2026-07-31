package com.ecom.project.controller;

import com.ecom.project.entity.Product;
import com.ecom.project.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping("/products")
    public Page<Product> getProducts( @RequestParam(required = false) Long category,
            @RequestParam(required = false) String filter,
            @RequestParam(required = false, defaultValue = "id:asc") String sort,
            @RequestParam(defaultValue = "25") int limit,
            @RequestParam(defaultValue = "0") int offset
    ) {
        return productService.search(category, filter, sort, limit, offset);
    }

    @GetMapping("/products/{id}")
    public Product getProduct(@PathVariable("id")Long productId){
        return productService.findProduct(productId);
    }

}
