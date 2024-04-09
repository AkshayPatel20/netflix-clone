import React, { useState, useEffect } from 'react'

import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

import axios from '../../functions/axios';

import { BsFillCollectionPlayFill } from "react-icons/bs";

import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);

    const [trailerUrl, setTrailerUrl] = useState('');

     useEffect(() => {
        //Fetching Row Request From API
        //if [], runs once when row load, and dont run again 
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
        
     }, [fetchUrl]);

    //  console.table(movies);

     const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
     };

     const handleClick = (movie) => {
         if(trailerUrl){
             setTrailerUrl('');
         }else{
             movieTrailer(movie?.name || movie?.original_name || movie?.title || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch(error => console.log(error));
         }
         
     }


    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {/* Serveral Row_Posters */}
                {
                    movies.map(movie => (
                        
                        movie.backdrop_path != null ? 
                        <div class="row_singleposter">
                            
                            <img src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`${isLargeRow ? "row__posterLarge": "row__poster"}`} key={movie.id} />
                            
                            <button className="poster__button" onClick={() => handleClick(movie)}><BsFillCollectionPlayFill className="poster_trailer_icon" /></button>
                        </div>
                        : 
                        ''
                    ))  
                }
            </div>
            {/* container -> poster  */}
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/> }
        </div>
    )
}

export default Row;