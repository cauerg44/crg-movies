import type { GenreDTO } from "./genre"

export type MovieDTO = {
    id: number;
    name: string;
    premiered: number;
    rating: number;
    summary: string;
    image: string;
    genres: GenreDTO[];
}