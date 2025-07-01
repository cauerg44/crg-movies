package com.crg.movies.application.dto;

import com.crg.movies.application.models.Genre;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class GenreDTO {

    private Long id;
    private String name;

    public GenreDTO(Genre model) {
        this.id = model.getId();
        this.name = model.getName();
    }
}