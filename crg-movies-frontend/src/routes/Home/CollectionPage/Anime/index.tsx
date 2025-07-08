import { useEffect, useState } from "react";
import MovieCard from "../../../../components/MovieCard";
import type { MovieDTO } from "../../../../models/movie";
import * as movieService from '../../../../services/movie-service.ts';

export default function Anime() {

    const [anime, setAnime] = useState<MovieDTO[]>([]);

    useEffect(() => {
        movieService.getMoviesByGenre("anime")
            .then(response => {
                setAnime(response.data);
            });
    }, []);

    return (
        <section>
            {
                anime.map(
                    anime => <MovieCard key={anime.id} movie={anime} />
                )
            }
        </section>
    );
}