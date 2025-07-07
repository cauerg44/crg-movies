import { useEffect, useState } from "react";
import MovieCard from "../../../../components/MovieCard";
import type { MovieDTO } from "../../../../models/movie";
import axios from "axios";

export default function RomanceMovies() {

    const [romanceMovie, setRomanceMovie] = useState<MovieDTO[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/movies/romance")
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