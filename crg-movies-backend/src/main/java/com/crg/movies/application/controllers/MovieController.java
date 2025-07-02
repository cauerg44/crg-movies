package com.crg.movies.application.controllers;

import com.crg.movies.application.dto.MovieDTO;
import com.crg.movies.application.dto.MovieMinDTO;
import com.crg.movies.application.services.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping(value = "/{id}")
    public ResponseEntity<MovieDTO> getMovieById(@PathVariable Long id) {
        MovieDTO dto = movieService.findMovieById(id);
        return ResponseEntity.ok(dto);
    }

    @GetMapping(value = "/romance")
    public List<MovieMinDTO> getRomanceMovies() {
        return movieService.findMoviesByGenre("Romance");
    }

    @GetMapping(value = "/drama")
    public List<MovieMinDTO> getDramaMovies() {
        return movieService.findMoviesByGenre("Drama");
    }

    @GetMapping(value = "/action")
    public List<MovieMinDTO> getActionMovies() {
        return movieService.findMoviesByGenre("Action");
    }

    @GetMapping(value = "/adventure")
    public List<MovieMinDTO> getAdventureMovies() {
        return movieService.findMoviesByGenre("Adventure");
    }

    @GetMapping(value = "/horror")
    public List<MovieMinDTO> getHorrorMovies() {
        return movieService.findMoviesByGenre("Horror");
    }

    @GetMapping(value = "/anime")
    public List<MovieMinDTO> getAnimeMovies() {
        return movieService.findMoviesByGenre("Anime");
    }

    @GetMapping(value = "/science-fiction")
    public List<MovieMinDTO> getScienceFictionMovies() {
        return movieService.findMoviesByGenre("Science-Fiction");
    }
}