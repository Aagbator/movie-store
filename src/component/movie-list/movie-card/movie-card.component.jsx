import React from 'react';
import './movie-card.styles.scss';
import StarRatings from 'react-star-ratings';
import {Link} from 'react-router-dom';

const MovieCard = ({movie}) => {
    const {fields, sys} = movie;
    const {image, title, year, genres, isNewMovie, rating} = fields;
    const {id} = sys;
    const imageUrl = image.fields.file.url;

    return(
        <Link to={`/movie/${id}`} className='movie-card'>
            <div className='movie-card-container'>
                <div className='movie-card-img'>
                    <img src={imageUrl} alt={title} />
                </div>
            </div>
            {isNewMovie? (
                <div className='movie-status'>New</div>
            ): ''}
            <div className="content">
                <h2 className='title'>{title}</h2>
                <StarRatings
                    rating={rating}
                    starRatedColor="orange"
                    starDimension="15px"
                    starSpacing="0"
                    numberOfStars={5}
                    name='rating'
                />
                <p className='year'>Year : {year}</p>
                <p className='genre'>Genre : {genres.join(', ')}</p>
            </div>
        </Link>
    )
}

export default MovieCard;
