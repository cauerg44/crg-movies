import { useEffect, useState } from "react";
import type { MovieDTO } from "../../../models/movie";
import * as movieService from '../../../services/movie-service.ts';
import { useParams } from "react-router-dom";
import MovieCard from "../../../components/MovieCard/index.tsx";
import MovieDetailsButtons from "../../../components/MovieDetailsButtons/index.tsx";

export default function MovieDetailsPage() {

    const params = useParams();

    const [movie, setMovie] = useState<MovieDTO>();
    
    useEffect(() => {
        movieService.movieById(Number(params.movieId))
            .then(response => {
                console.log(response)
                setMovie(response.data);
            })
    }, [params.movieId]);

    return (
        <main>
            <section className="crgm-container">
                {
                    movie &&
                    <MovieCard key={movie.id} movie={movie}/>
                }
            </section>
            <MovieDetailsButtons />
        </main>
    );
}