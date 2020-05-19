import React, { useContext } from 'react';
import MovieContext from '../../context/MovieContext.context';
import './movie-list.styles.scss';
import MovieCard from '../movie-card/movie-card.component';


const MovieList = () => {

    const data = useContext(MovieContext);
    // let [movies, setMovies] = useState([
    //
    // ]);

    const { filteredMovies, isLoading } = data;

    return(
        <div className='movie-list'>
            { filteredMovies.map((movie, i) => <MovieCard key={i} movie={movie}></MovieCard>) }
        </div>
    )
}

export default MovieList;
