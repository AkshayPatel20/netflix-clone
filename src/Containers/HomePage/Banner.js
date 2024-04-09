import React, {useState, useEffect} from 'react'

import axios from '../../functions/axios';
import requests from '../../functions/request';

import './Banner.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNeflixOriginals);
            const randomNumber = Math.floor(Math.random() * request.data.results.length - 1);
            setMovies(request.data.results[randomNumber]);
            return request;
        }
        fetchData();
    }, []);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner" 
            style={{
                backgroundImage : `url(${base_url}${movies?.backdrop_path})`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover',    
            }}
        > 
            <div className="banner__fadeTop"></div>
            {/* Background Image */}
            <div className="banner_contents">
                <h1 className="banner__title">{movies?.title || movies?.name || movies?.original_name}</h1>
                
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <h2 className="banner__description">{truncate(movies?.overview , 150)}</h2>
                {/* div 2 button */}
                {/* description */}
            </div>
            <div className="banner__fadeBottom"></div>
            
        </header>
    )
}

export default Banner
