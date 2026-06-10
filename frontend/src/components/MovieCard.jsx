import './MovieCard.css';
import { StartRating } from './StartRating';
import {MOVIE_GENRES} from '../constants/genres.js';


export function MovieCard({movie}) {
    const movieGenres = MOVIE_GENRES.filter(genre => 
    movie.genre_ids
    .includes(genre.id))
    .map(genre => genre.name)
    return (
    <>
        <div className='movie-card'>
            <img className='poster-card' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
            <div className='movie-info'>
                <div className='genres-container'>
                    {
                        movieGenres.map( genre => (
                            <span key={genre} className='genre-tag'>{genre}</span>
                            )
                        )
                    }        
                </div>
                <div className='mid-section-title-btn'>
                    <h2 >{movie.title}</h2>
                    <button className='btn-watch-later'>WATCH LATER</button>
                </div>
                <StartRating score={movie.vote_average}/>
                <p>{movie.overview}</p>
            </div> 
        </div>
    </>
    )
}