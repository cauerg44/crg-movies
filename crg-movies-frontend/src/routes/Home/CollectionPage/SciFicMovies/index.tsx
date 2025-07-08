import { useEffect, useState } from "react";
import MovieCard from "../../../../components/MovieCard";
import type { MovieDTO } from "../../../../models/movie";
import * as movieService from '../../../../services/movie-service.ts';

export default function SciFicMovies() {

    const [sciFicMovie, setSciFicMovie] = useState<MovieDTO[]>([]);

    useEffect(() => {
        movieService.getMoviesByGenre("science-fiction")
            .then(response => {
                setSciFicMovie(response.data);
            });
    }, []);

    return (
        <section>
            {
                sciFicMovie.map(
                    sciFicMovie => <MovieCard key={sciFicMovie.id} movie={sciFicMovie} />
                )
            }
        </section>
    );
}