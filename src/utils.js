export function getMoviesURL(API, state, loadingMovies) {
  fetch(API)
      .then(response => response.json())
      .then(jsonResponse => {
        state(jsonResponse.results);
        const load = () => {
          if (loadingMovies){
          return loadingMovies(false); 
        }}
        load();
      });
}

