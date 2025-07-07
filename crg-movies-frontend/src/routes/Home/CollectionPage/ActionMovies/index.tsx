import { useEffect, useState } from "react";
import MovieCard from "../../../../components/MovieCard";
import type { MovieDTO } from "../../../../models/movie";
import axios from "axios";

export default function ActionMovies() {

    const [actionMovie, setActionMovie] = useState<MovieDTO[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/movies/action")
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