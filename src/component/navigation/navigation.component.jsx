import './navigation.styles.scss';
import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import MovieContext from "../../context/MovieContext.context";

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const movieContext = useContext(MovieContext);
    const { genres, years } = movieContext;

    const toggleMenu = () =>  setIsOpen(prevState => !prevState);

    const onFilterYear = (e) => {
        movieContext.filterByYear(e.target.value);
    };
    const onFilterGenre = (e) => {
        movieContext.filterByGenre(e.target.value);
    }

    const onFilterByText = (e) => {
        movieContext.filterByText(e.target.value);
    }

    return (
        <nav className='navigation'>
            <Link to='/' className='logo'><span>N</span>Netflux</Link>
            <div className={`navigation-menu ${isOpen ? 'open' : ''}`} >
                <div className='block title'>
                    <label>Title</label>
                    <input onChange={onFilterByText} type='text' placeholder='Search by title'/>
                </div>
                <div className='block genre'>
                    <label>Genre</label>
                    <select name='genre' onChange={onFilterGenre}>
                        <option value=''>All</option>
                        {genres.map((genre, i) => <option key={i} value={genre}>{genre}</option>)}
                    </select>
                </div>
                <div className='block year'>
                    <label>Release Year</label>
                    <select name='year' onChange={onFilterYear}>
                        <option value=''>All</option>
                        {years.map((year, i) => <option key={i} value={year}>{year}</option>)}
                    </select>
                </div>
            </div>
            <span onClick={toggleMenu} className='menu-btn'>{isOpen ? 'close' : 'Filter'}</span>
        </nav>
    )
}

export default Navigation;
