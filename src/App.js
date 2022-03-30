import styles from './App.module.css';
import { useState } from 'react';
import MainPage from './main-page/main-page';
import MovieDescriptions from './movie-descriptions/movie-descriptions';


const App = () => {
  const [loading, setLoaing] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  return (
    <div>
      <MainPage/>
      <MovieDescriptions/>
    </div>
  );
}

export default App;
