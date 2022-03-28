import styles from './App.module.css';
import MainPage from './main-page/main-page';
import MovieDescriptions from './movie-descriptions/movie-descriptions';

const MOVIE_API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=17ebf30e';

const App = () => {
  return (
    <div>
      <MainPage />
      <MovieDescriptions/>
    </div>
  );
}

export default App;
