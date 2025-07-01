package com.crg.movies.application.controllers;

import com.crg.movies.application.dto.MovieDTO;
import com.crg.movies.application.dto.MovieMinDTO;
import com.crg.movies.application.services.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping(value = "/movies")
@RestController
public class MovieController {

    private final MovieService movieService;

    @GetMapping
    public ResponseEntity<List<MovieMinDTO>> getAllMovies() {
        List<MovieMinDTO> list = movieService.findAllMoviesOrderedById();
        return ResponseEntity.ok(list);
    }
}