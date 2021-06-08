import React from 'react'
import "./Movie.css"


const Movie = ({overview, image, title, voteAverage, releaseDate}) => {
    return (
        <li className="movie-item">
            <div className="movie-header">
                <img className="image" src={`https://image.tmdb.org/t/p/w500/${image}`} alt={title}/>
                <div className="movie-description">
                    <h3>{title}</h3>
                    <p className="release-date">{releaseDate}</p>
                    <p className="rating">{voteAverage} <span>&#9733;</span></p>
                </div>
            </div>
            <p className='movie-overview'>{overview}</p>
            <hr/>
        </li>
    );
}

export default Movie;