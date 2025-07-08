import { useEffect, useState } from "react";
import MovieCard from "../../../../components/MovieCard";
import type { MovieDTO } from "../../../../models/movie";
import * as movieService from '../../../../services/movie-service.ts';

export default function RomanceMovies() {

    const [romanceMovie, setRomanceMovie] = useState<MovieDTO[]>([]);

    useEffect(() => {
        movieService.getMoviesByGenre("romance")
            .then(response => {
                setRomanceMovie(response.data);
            });
    }, []);

    return (
        <section>
            {
                romanceMovie.map(
                    romanceMovie => <MovieCard key={romanceMovie.id} movie={romanceMovie} />
                )
            }
        </section>
    );
}