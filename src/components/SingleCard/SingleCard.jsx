import React from 'react';

const SingleCard = ({movie,handleWatchTime}) => {

    const { poster ,movieName, watchTime,description, imdbRating } = movie;
    // console.log(movie);
    return (
        <>
          <div className="movie-card card text-center m-auto w-100">
                <div className="movie-poster w-50 m-auto">
                    <img className='w-75' src={poster} alt="" />
                </div>
                <h3>{movieName}</h3>
                <p>{description}</p>
                <div className="timeAndRating d-flex justify-content-around">
                    <p>WatchTime : {watchTime}</p>
                    <p>Rating: {imdbRating}</p>
                </div>
                <button onClick={ ()=> handleWatchTime(watchTime)} className='btn btn-info w-75 m-auto'>Book Now</button>
            </div>
            
        </>
    );
};

export default SingleCard;