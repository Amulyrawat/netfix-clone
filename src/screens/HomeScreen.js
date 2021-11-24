import React from 'react'
import Row from '../Row';
import Banner from '../utils/Banner';
import "./HomeScreen.css";
import Nav from '../utils/Nav';
import requests from '../utils/Requests';

function HomeScreen() {
    return (
        <div className="homescreen">
            <Nav/>
            <Banner/>
            <Row 
            title='NETFIX ORIGINALS'
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow/>
            <Row 
            title='Trending Now'
            fetchUrl={requests.fetchTrending}/>
            <Row 
            title='Top Rated'
            fetchUrl={requests.fetchTopRated}/>
            <Row 
            title='Action Movies'
            fetchUrl={requests.fetchActionMovies}/>
            <Row 
            title='Comedy Movies'
            fetchUrl={requests.fetchComedyMovies}
            isLargeRow/>
            <Row 
            title='Horror Movies'
            fetchUrl={requests.fetchHorrorMovies}
            isLargeRow/>
            <Row 
            title='Romance Movies'
            fetchUrl={requests.fetchRomanceMovies}
            isLargeRow/>
            <Row 
            title='Documentaries'
            fetchUrl={requests.fetchDocumentaries}
            isLargeRow/>
        </div>
    )
}

export default HomeScreen
