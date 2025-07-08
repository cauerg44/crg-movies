import { useEffect, useState } from "react";
import MovieCard from "../../../../components/MovieCard";
import type { MovieDTO } from "../../../../models/movie";
import * as movieService from '../../../../services/movie-service.ts';

export default function HorrorMovies() {

    const [horrorMovie, setHorrorMovie] = useState<MovieDTO[]>([]);

    useEffect(() => {
        movieService.getMoviesByGenre("horror")
            .then(response => {
                setHorrorMovie(response.data);
            });
    }, []);

    return (
        <section>
            {
                horrorMovie.map(
                    horrorMovie => <MovieCard key={horrorMovie.id} movie={horrorMovie} />
                )
            }
        </section>
    );
}