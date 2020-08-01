import React, { useContext } from 'react';
import MovieContext from '../../context/MovieContext.context';
import './movie-list.styles.scss';
import MovieCard from './movie-card/movie-card.component';


const MovieList = () => {

    const data = useContext(MovieContext);
    // let [movies, setMovies] = useState([
    //
    // ]);

    const { filteredMovies } = data;

    return(
        <>
        {filteredMovies.length > 0 ? (
                <div className='movie-list'>
                    <iframe src="//iframe.dacast.com/b/178991/c/559376" width="590" height="431" frameborder="0" scrolling="no" allow="autoplay" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
                    { filteredMovies.map((movie, i) => <MovieCard key={i} movie={movie}></MovieCard>) }
                </div>
            ): (
                <div className='movie-list'>
                    <h1 style={{'color': 'grey'}}>No Result Found</h1>
                </div>
            )}
        </>
    )
}

export default MovieList;
