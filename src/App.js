import React, {useState, useEffect} from 'react'
import './App.css';
import Navbar from "./components/Navbar"
import Movies from "./components/Movies"
import HeroSection from "./components/HeroSection"
import Footer from "./components/Footer";
import About from "./components/About"

const axios = require("axios");

function App() {

    const API_KEY = "3ee3c3d8908a0b1a2be91711c0f4a1f4";

    const [movies, setMovies] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    const fetchData = async () => {
        const req = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`
        return await axios.get(req)
    }


    useEffect(async () => {
        const data = await fetchData();
        console.log(data.data.results)
        setMovies(data.data.results);
    }, [])


    useEffect(async () => {
        if(pageNumber > 1){
            let data = await fetchData();
            setMovies(movies.concat(data.data.results));
        }
        // setNewMovies()
    }, [pageNumber])

    const incrementPageNumber = (e) => {
        e.preventDefault()
        setPageNumber(prevState => prevState + 1)
    }

    return (
        <div className="App">
            <Navbar/>
            <HeroSection/>
            <Movies
                incrementPageNumber={incrementPageNumber}
                movies={movies}/>
                <About />
                <Footer />
        </div>
    );
}

export default App;
