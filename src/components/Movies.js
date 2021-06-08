import React from 'react'
import Movie from './Movie'
import "./Movies.css"
import Button from "./Button";


const Movies = ({movies, incrementPageNumber}) => {
    return (
        <div id="movies" className="movies">
            {/*<h1>Checkout these EPIC movies</h1>*/}
            <div className="movies-container">
                <div className="movies-wrapper">
                    <ul className="movies-items">
                        {
                            movies.map(movie => (
                                <Movie
                                    key={Math.random() + 1}
                                    title={movie.title}
                                    voteAverage={movie.vote_average}
                                    overview={movie.overview}
                                    image={movie.backdrop_path}
                                    releaseDate={movie.release_date}/>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="loadMoreButton">
                <Button
                    hidden={movies.length === 0 ? "hide" : ""}
                    buttonStyle="btn--primary"
                    buttonSize="btn--medium"
                    onClick={incrementPageNumber}
                    children="Load More"/>
            </div>
        </div>
    );
}

export default Movies;