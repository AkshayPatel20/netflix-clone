import React from 'react'

import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';
import requests from '../../functions/request';


function Layout() {
    return (
        <div>
            <Nav/>
            {/* Banner */}
            <Banner/>

            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Netflix Original" fetchUrl={requests.fetchNeflixOriginals} isLargeRow/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} />
        </div>
    )
}

export default Layout
