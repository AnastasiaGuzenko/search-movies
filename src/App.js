import styles from './App.module.css';
import MainPage from './main-page/main-page';
import { Route, Routes} from 'react-router-dom';
import Layout from './layout/layout';
import MovieDescriptionPage from './movie-description-page/movie-description-page';


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route 
            index 
            element={<MainPage/>} 
          />
          <Route 
            path='movie-description/:id' 
            element={<MovieDescriptionPage/>} 
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
