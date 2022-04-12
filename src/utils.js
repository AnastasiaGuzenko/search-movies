export function getMoviesURL(API, state, loadingMovies, setErrorMessage) {
  fetch(API)
      .then(response => response.json())
      .then(jsonResponse => {
        const loading = (status) => {
          if (loadingMovies){
          return loadingMovies(status); 
        }}

        if (jsonResponse.results) {
          state(jsonResponse.results);
          loading(false);
        } else {
          setErrorMessage(jsonResponse.Error)
          loading(false);
        }

      });
};
