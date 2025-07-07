import axios from "axios";
import { BASE_URL } from "../utils/system";

export function findAll() {
    return axios.get(`${BASE_URL}/movies`);
}

export function movieById(id: number) {
    return axios.get(`${BASE_URL}/movies/${id}`);
}

export function getMoviesByGenre(genre: string) {
    return axios.get(`${BASE_URL}/movies/${genre}`);
}