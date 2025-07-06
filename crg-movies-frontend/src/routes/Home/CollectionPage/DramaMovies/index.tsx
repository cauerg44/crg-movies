import { useEffect, useState } from "react";
import MovieCard from "../../../../components/MovieCard";
import type { MovieDTO } from "../../../../models/movie";
import axios from "axios";

export default function DramaMovies() {

    const [dramaMovie, setDramaMovie] = useState<MovieDTO[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/movies/drama")
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