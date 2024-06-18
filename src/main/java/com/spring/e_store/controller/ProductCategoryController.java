package com.spring.e_store.controller;


import com.spring.e_store.dao.ProductCategoryRepository;
import com.spring.e_store.entity.ProductCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ProductCategoryController {

    @Autowired
    ProductCategoryRepository productCategoryRepository;

    @GetMapping("getProductCategory")
    public List<ProductCategory> getProductCategory() {

        return productCategoryRepository.findAll();

    }
}
