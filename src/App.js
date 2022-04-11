import { Route, Routes} from 'react-router-dom';
import { useState} from 'react';
import MovieDescriptionPage from './movie-description-page/movie-description-page';
import Header from './header/header';
import Footer from './footer/footer';
import styles from './App.module.css';
import MainPage from './main-page/main-page';
import SearchMovies from './search-movies/search-movies';

const App = () => {
  const [visible, setVisible] = useState(false)
  const [loadingMainPage, setLoadingMainPage] = useState(true);
  const [loadingMovieDescriptionPage, setLoadingMovieDescriptionPage] = useState(true);
  const [moviesSearchValue, setMoviesSearchValue] = useState([]);

  const [errorMessageMainPage, setErrorMessageMainPage] = useState(null);
  const [errorMessageDescriptionPage, setErrorMessageDescriptionPage] = useState(null);

  const closeSearchModal = () => {
    setVisible(false)
  }
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Header
          closeSearchModal={closeSearchModal}
          setMoviesSearchValue={setMoviesSearchValue}
          setVisible={setVisible}
        />
        <div>
          <Routes>
            <Route
              path='/search'
              element=
              {
                <SearchMovies
                  visible={visible}
                  moviesSearchValue={moviesSearchValue}
                />
              }
            />
            <Route 
              path='/' 
              element=
              {
                <MainPage 
                setLoading={setLoadingMainPage}
                loading={loadingMainPage}
                errorMessageMainPage={errorMessageMainPage}
                setErrorMessageMainPage={setErrorMessageMainPage}
              />}
            />
            <Route 
              path='/movie-description/:id' 
              element=
              {
                <MovieDescriptionPage 
                  setLoading={setLoadingMovieDescriptionPage}
                  loading={loadingMovieDescriptionPage}
                  errorMessageDescriptionPage={errorMessageDescriptionPage}
                  setErrorMessageDescriptionPage={setErrorMessageDescriptionPage}
              />} 
            />
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
