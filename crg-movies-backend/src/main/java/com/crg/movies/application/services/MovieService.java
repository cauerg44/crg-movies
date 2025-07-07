package com.crg.movies.application.services;

import com.crg.movies.application.dto.MovieDTO;
import com.crg.movies.application.dto.MovieMinDTO;
import com.crg.movies.application.models.Movie;
import com.crg.movies.application.repository.MovieRepository;
import com.crg.movies.application.services.exceptions.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class MovieService {

    private final MovieRepository movieRepository;

    @Transactional(readOnly = true)
    public List<MovieMinDTO> findAllMoviesOrderedById() {
        List<Movie> result = movieRepository.findAll(Sort.by("id"));
        return result.stream().map(MovieMinDTO::new).toList();
    }

    @Transactional(readOnly = true)
    public List<MovieDTO> findMoviesByGenre(String genre) {
        List<Movie> result =  movieRepository.findMoviesByGenre(genre);
        return result.stream().map(MovieDTO::new).toList();
    }

    @Transactional(readOnly = true)
    public MovieDTO findMovieById(Long id) {
        Movie result = movieRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Resource not found"));
        return new MovieDTO(result);
    }
}