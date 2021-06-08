import React from 'react'
import "./About.css"

const About = () => {
    return (
        <div id="about">
            <h1>About</h1>
            <p>
                This website displays the most popular latest movies. Each movies contains a corresponding image,
                overview, rating and release date. The movies' data is fetched from the Movie Database
                (<a href="https://www.themoviedb.org/documentation/api">TMDB</a>) API (v3).
                TMDb is a community built movie and TV database. Every piece of data has been added
                by its amazing community dating back to 2008.
            </p>
        </div>
    );
}

export default About;