import './PopularMovies.css';
import { fetchMovies } from "../services/tmdb";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
export function PopularMovies() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function getMovies() {
            const moviesData = await fetchMovies();
            setMovies(moviesData);
        }
        getMovies();
    }, []);
 return (
    <div className='popular-movies'>
        <h2 className='section-title'>Popular Movies</h2>
        <ul className='movies-container'>
            {movies.map((movie) => (
                <li className='movie-item' key={movie.id}>
                    <MovieCard movie={movie} />
                </li>
            ))}
        </ul>
    </div>
);
}