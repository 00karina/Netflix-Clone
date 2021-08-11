import React from "react";
import Row from "./Row";
import requests from "./requests"
import Banner from "./Banner"
import "./App.css"
import Navbar from "./Navbar"
function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <Banner/>
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow></Row>
    <Row title="TRENDING" fetchUrl={requests.fetchTrending}></Row>
    <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}></Row>
    <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}></Row>
    <Row title="COMEDY MONIES" fetchUrl={requests.fetchComedyMovies}></Row>
    <Row title="ROMANTIC MOVIE" fetchUrl={requests.FetchRomnceMovies}></Row>
    <Row title="DOCUMENTRIES" fetchUrl={requests.fetchDocumentries}></Row>
     </>
    </div>
  );
}

export default App
