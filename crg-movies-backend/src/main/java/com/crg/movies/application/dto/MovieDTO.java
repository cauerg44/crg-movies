package com.crg.movies.application.dto;

import com.crg.movies.application.models.Genre;
import com.crg.movies.application.models.Movie;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@Getter
public class MovieDTO {

    private Long id;
    private String name;
    private Integer premiered;
    private Double rating;
    private String summary;
    private String image;

    private Set<GenreDTO> genres = new HashSet<>();

    public MovieDTO(Long id, String name, Integer premiered, Double rating, String summary, String image) {
        this.id = id;
        this.name = name;
        this.premiered = premiered;
        this.rating = rating;
        this.summary = summary;
        this.image = image;
    }

    public MovieDTO(Movie model) {
        this.id = model.getId();
        this.name = model.getName();
        this.premiered = model.getPremiered();
        this.rating = model.getRating();
        this.summary = model.getSummary();
        this.image = model.getImage();

        for (Genre genre : model.getGenres()) {
            this.genres.add(new GenreDTO(genre));
        }
    }
}