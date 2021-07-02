import React from "react";
import "./App.css";
import requests from "./requests";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";


const App = () => {
  return (
    <div className="app">
    <Nav/>
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchTopActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchTopComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchTopHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchTopRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchTopDocumentaries} />
    </div>
  );
};

export default App;
