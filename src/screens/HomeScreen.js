import React  from "react";
import './HomeScreen.css';
import Nav  from "../Nav.js";
import Banner from "../Banner.js"
import requests from "../Requests";
import Row from "../Row";

 function HomeScreen(){
    return (
        <div className="homeScreen">
         <Nav />
         <Banner />
         
         <Row 
          title = "Netflix Originals" 
          fetchUrl ={requests.fetchNetflixOriginals}
          isLargeRow
         />
         <Row 
         title = "Trending Now" 
          fetchUrl ={requests.fetchTrending}/>
         <Row 
          title = "Action Movies" 
          fetchUrl ={requests.fetchActionMovies}
         />
         <Row 
         title = "Comedy Movies" 
          fetchUrl ={requests.fetchComdeyMovies}/>
         <Row 
          title = "Hrror Movies" 
          fetchUrl ={requests.fetchHorrorMovies}/>
         <Row title = "Romance Movies" 
          fetchUrl ={requests.fetchRomanceMovies}/>
         <Row title = "Documentaries" 
          fetchUrl ={requests.fetchDocumentaries}/>
         
        
        </div>
    )
 }
 export default HomeScreen;