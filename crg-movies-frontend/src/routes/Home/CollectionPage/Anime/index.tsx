import { useEffect, useState } from "react";
import MovieCard from "../../../../components/MovieCard";
import type { MovieDTO } from "../../../../models/movie";
import axios from "axios";

export default function Anime() {

    const [anime, setAnime] = useState<MovieDTO[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/movies/anime")
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