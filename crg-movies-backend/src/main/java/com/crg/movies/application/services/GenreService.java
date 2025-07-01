package com.crg.movies.application.services;

import com.crg.movies.application.dto.GenreDTO;
import com.crg.movies.application.models.Genre;
import com.crg.movies.application.repository.GenreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class GenreService {

    private final GenreRepository genreRepository;

    @Transactional
    public List<GenreDTO> findAllCategories() {
        List<Genre> result = genreRepository.findAll();
        return result.stream().map(GenreDTO::new).toList();
    }
}