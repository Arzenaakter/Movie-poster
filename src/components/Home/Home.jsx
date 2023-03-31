import './Home.css';
import React, { useState, useEffect } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Home = ({handleWatchTime}) => {
    const [movies, setMovies] = useState([])
    useEffect(() => { 
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setMovies(data))
     }, [])
    return (
        <div>
           <div className="movie-container">
            {
                movies.map(movie => <SingleCard movie={movie} handleWatchTime={handleWatchTime}></SingleCard>)
            }
           </div>
        </div>
    );
};

export default Home;