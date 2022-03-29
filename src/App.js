import styles from './App.module.css';
import MainPage from './main-page/main-page';
import MovieDescriptions from './movie-descriptions/movie-descriptions';


const App = () => {
  return (
    <div>
      <MainPage />
      <MovieDescriptions/>
    </div>
  );
}

export default App;
