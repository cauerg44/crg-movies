import { useEffect, useState } from "react";
import MovieCard from "../../../../components/MovieCard";
import type { MovieDTO } from "../../../../models/movie";
import axios from "axios";

export default function AdventureMovies() {

    const [adventureMovie, setAdventureMovie] = useState<MovieDTO[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/movies/adventure")
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