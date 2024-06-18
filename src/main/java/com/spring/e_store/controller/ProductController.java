package com.spring.e_store.controller;

import com.spring.e_store.dao.ProductRepository;
import com.spring.e_store.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @GetMapping("getProducts")
    public List<Product> getProducts()
    {
        List<Product> allProducts = productRepository.findAll();
        return allProducts;
    }


}
