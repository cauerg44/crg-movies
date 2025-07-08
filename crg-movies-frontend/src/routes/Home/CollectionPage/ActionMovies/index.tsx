import { useEffect, useState } from "react";
import MovieCard from "../../../../components/MovieCard";
import type { MovieDTO } from "../../../../models/movie";
import * as movieService from '../../../../services/movie-service.ts';

export default function ActionMovies() {

    const [actionMovie, setActionMovie] = useState<MovieDTO[]>([]);

    useEffect(() => {
        movieService.getMoviesByGenre("action")
            .then(response => {
                setActionMovie(response.data);
            });
    }, []);

    return (
        <section>
            {
                actionMovie.map(
                    actionMovie => <MovieCard key={actionMovie.id} movie={actionMovie} />
                )
            }
        </section>
    );
}