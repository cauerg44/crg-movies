package com.crg.movies.application.repository;

import com.crg.movies.application.models.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

    @Query(value = """
        SELECT DISTINCT m.*
        FROM tb_movie m
        INNER JOIN tb_movie_genre mg ON m.id = mg.movie_id
        INNER JOIN tb_genre g ON g.id = mg.genre_id
        WHERE LOWER(g.name) = LOWER(:genreName)
        ORDER BY m.name
    """, nativeQuery = true)
    List<Movie> findMoviesByGenre(@Param("genreName") String genreName);
}