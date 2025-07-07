import { useEffect, useState } from "react";
import MovieCard from "../../../../components/MovieCard";
import type { MovieDTO } from "../../../../models/movie";
import axios from "axios";

export default function SciFicMovies() {

    const [sciFicMovie, setSciFicMovie] = useState<MovieDTO[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/movies/science-fiction")
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