const API_KEY = "378fd6c520f8574346fa45bfe688d238";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/tv?api_key=${API_KEY}&language=en-US&page=1`,
  fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  FetchRomnceMovies: `/discover/tv?api_key=${API_KEY}&language=en-US&page=1`,
  fetchDocumentries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};
export default requests;
