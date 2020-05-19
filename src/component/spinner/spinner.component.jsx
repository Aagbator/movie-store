import React, { useContext } from 'react';
import MovieContext from '../../context/MovieContext.context';
import './spinner.styles.scss';


const Spinner = () => {

    const { isLoading } = useContext(MovieContext);

    return(
        <>
        { isLoading ? (
            <div className='spinner'>
                <span className='spin'>loading</span>
            </div>
        ): ''}
        </>
    )
}

export default Spinner;
