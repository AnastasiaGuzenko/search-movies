export function getMoviesURL(API, state) {
  fetch(API)
      .then(response => response.json())
      .then(jsonResponse => {
        state(jsonResponse.results);
      });
}

