import { useEffect, useState } from "react";
import MovieCard from "../../../../components/MovieCard";
import type { MovieDTO } from "../../../../models/movie";
import * as movieService from '../../../../services/movie-service.ts';

export default function DramaMovies() {

    const [dramaMovie, setDramaMovie] = useState<MovieDTO[]>([]);

    useEffect(() => {
        movieService.getMoviesByGenre("drama")
            .then(response => {
                setDramaMovie(response.data);
            });
    }, []);

    return (
        <section>
            {
                dramaMovie.map(
                    dramaMovie => <MovieCard key={dramaMovie.id} movie={dramaMovie} />
                )
            }
        </section>
    );
}