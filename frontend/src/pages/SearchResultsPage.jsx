import { useSearchParams } from "react-router-dom"
import {searchMovies} from '../services/tmdb.js'
import { useEffect,useState } from "react"
import { MovieCard } from "../components/MovieCard.jsx"
export function SearchResultsPage() {
    const [searchParams] = useSearchParams()
    const query = searchParams.get('query')
    const type = searchParams.get('type')
    const[movies,setMovies] = useState([])
    
    useEffect(() => {
        async function fetchMovies() {
            const results = await searchMovies(query,type)
            setMovies(results)
        }
        if (query) {
            fetchMovies()
        } else {
            <div>No search query provided</div>
        }
    }, [query,type])
    return (
        <>
        <h1>Search Results</h1> 
        <div>{movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}</div> 
        {movies.length === 0 && <div>No results found</div>}
        
        </>
    )
}