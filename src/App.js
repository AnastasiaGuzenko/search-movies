import styles from './App.module.css';
import MainPage from './main-page/main-page';
import { Route, Routes} from 'react-router-dom';
import MovieDescriptionPage from './movie-description-page/movie-description-page';
import Header from './header/header';
import Footer from './footer/footer';


const App = () => {
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Header />
        <Routes>
          <Route 
            path='/' 
            element={<MainPage/>}
          />
          <Route 
            path='/movie-description/:id' 
            element={<MovieDescriptionPage/>} 
          />
        </Routes>
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
