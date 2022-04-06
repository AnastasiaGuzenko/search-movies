import styles from './App.module.css';
import MainPage from './main-page/main-page';
import { Route, Routes} from 'react-router-dom';
import MovieDescriptionPage from './movie-description-page/movie-description-page';
import Header from './header/header';
import Footer from './footer/footer';
import { useState } from 'react';

const App = () => {
  const [loadingMainPage, setLoadingMainPage] = useState(true);
  const [loadingMovieDescriptionPage, setLoadingMovieDescriptionPage] = useState(true);

  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Header />
        <div>
          <Routes>
            <Route 
              path='/' 
              element=
              {
                <MainPage 
                setLoading={setLoadingMainPage}
                loading={loadingMainPage}
              />}
            />
            <Route 
              path='/movie-description/:id' 
              element=
              {
                <MovieDescriptionPage 
                  setLoading={setLoadingMovieDescriptionPage}
                  loading={loadingMovieDescriptionPage}
              />} 
            />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
