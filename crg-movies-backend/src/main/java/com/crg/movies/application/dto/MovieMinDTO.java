package com.crg.movies.application.dto;

import com.crg.movies.application.models.Movie;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class MovieMinDTO {

    private Long id;
    private String name;
    private Integer premiered;
    private Double rating;
    private String image;

    public MovieMinDTO(Movie model) {
        this.id = model.getId();
        this.name = model.getName();
        this.premiered = model.getPremiered();
        this.rating = model.getRating();
        this.image = model.getImage();
    }
}