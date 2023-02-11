const API_KEY ="2ff3a5b74746969ae1febba0c115f66b";

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_geners=28`,
    fetchComdeyMovies:`/discover/movie?api_key=${API_KEY}&with_geners=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_geners=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_geners=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_geners=99`

}

export default requests;