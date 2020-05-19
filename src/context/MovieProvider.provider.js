import MovieContext from './MovieContext.context';
import React, {Component} from 'react';
import Client from '../contentful';

export default class MovieProvider extends Component {

    state = {
        years: [],
        genres: [],
        isLoading: false,
        movies: [],
        filteredMovies: [],
    };

    getData = async () => {
        this.setState({isLoading: true});
        try{
            let response = await Client.getEntries({
                content_type: 'movies'
            });
            this.setState({
                movies: response.items,
                filteredMovies: response.items
            })
            this.setState({isLoading: false});
        } catch (error) {
            this.setState({isLoading: false});
            console.log(error);
        }
    }

    getFilters = async () => {
        this.setState({isLoading: true});
        try{
            let response = await Client.getEntries({
                content_type: 'movieFilters'
            });

            const { genre, year } = response.items[0].fields;
            this.setState({
                genres: genre,
                years: year
            })
            this.setState({isLoading: false});
        } catch (error) {
            this.setState({isLoading: false});
            console.log(error);
        }
    }

    componentDidMount(){
        this.getData();
        this.getFilters();

    }

    filterMovieByText = (query) => {
        const movies = this.state.movies;
        let result = movies.filter(movie => movie.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
        this.setState({ filteredMovies: result });
    }

    filterMoviesByYear = (year) => {
        const movies = this.state.movies;

        if(!year){
            this.setState({ filteredMovies: movies });
            return;
        }

        let result = movies.filter(movie =>  movie.fields.year === parseInt(year) );
        this.setState({ filteredMovies: result });
    }

    filterMoviesByGenre = (genre) => {
        console.log(genre);
        const movies = this.state.movies;
        if(!genre){
            this.setState({ filteredMovies: movies });
            return;
        }



       let result = movies.filter(movie => movie.fields.genres.indexOf(genre.toLowerCase()) !== -1);

       this.setState({ filteredMovies: result });
    }


    render() {
        return (
            <MovieContext.Provider
                value={{
                    movies: this.state.movies,
                    filteredMovies: this.state.filteredMovies,
                    isLoading: this.state.isLoading,
                    genres: this.state.genres,
                    years: this.state.years,
                    filterByText: query => this.filterMovieByText(query),
                    filterByYear: year => this.filterMoviesByYear(year) ,
                    filterByGenre: genre =>  this.filterMoviesByGenre(genre),
                }}
            >
                {this.props.children}
            </MovieContext.Provider>
        );
    }
}
