package com.crg.movies.application.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@NoArgsConstructor
@Getter
@Entity
@Table(name = "tb_movie")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter
    private Long id;

    @Setter
    private String name;

    @Setter
    private Integer premiered;

    @Setter
    private Double rating;

    @Column(columnDefinition = "TEXT")
    @Setter
    private String summary;

    @Setter
    private String image;

    @ManyToMany
    @JoinTable(name = "tb_movie_genre",
            joinColumns = @JoinColumn(name = "movie_id"),
            inverseJoinColumns = @JoinColumn(name = "genre_id"))
    private Set<Genre> genres = new HashSet<>();

    public Movie(Long id, String name, Integer premiered, Double rating, String summary, String image) {
        this.id = id;
        this.name = name;
        this.premiered = premiered;
        this.rating = rating;
        this.summary = summary;
        this.image = image;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Movie movie = (Movie) o;
        return Objects.equals(id, movie.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}