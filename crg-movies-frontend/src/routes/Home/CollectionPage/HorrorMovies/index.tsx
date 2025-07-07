import { useEffect, useState } from "react";
import MovieCard from "../../../../components/MovieCard";
import type { MovieDTO } from "../../../../models/movie";
import axios from "axios";

export default function HorrorMovies() {

    const [horrorMovie, setHorrorMovie] = useState<MovieDTO[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/movies/horror")
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