import { useEffect, useState } from "react";
import MovieCard from "../../../../components/MovieCard";
import type { MovieDTO } from "../../../../models/movie";
import * as movieService from '../../../../services/movie-service.ts';

export default function AdventureMovies() {

    const [adventureMovie, setAdventureMovie] = useState<MovieDTO[]>([]);

    useEffect(() => {
        movieService.getMoviesByGenre("adventure")
            .then(response => {
                setAdventureMovie(response.data);
            });
    }, []);

    return (
        <section>
            {
                adventureMovie.map(
                    adventureMovie => <MovieCard key={adventureMovie.id} movie={adventureMovie} />
                )
            }
        </section>
    );
}