import './MainPage.css'
import { PopularMovies } from '../components/PopularMovies'
import { PopularMoviesCouples } from '../components/PopularMoviesCouples'
import {News} from '../components/News';
function Main() { 
    return (
        <>
            <main className='main'>
                <PopularMovies />
                <PopularMoviesCouples/>
                <News/>
            </main>
        </>
    )
}

export default Main