package com.crg.movies.application.controllers;

import com.crg.movies.application.dto.GenreDTO;
import com.crg.movies.application.services.GenreService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping(value = "/genres")
@RestController
public class GenreController {

    private final GenreService genreService;

    @GetMapping
    public ResponseEntity<List<GenreDTO>> getAllCategories() {
        List<GenreDTO> list = genreService.findAllCategories();
        return ResponseEntity.ok(list);
    }
}