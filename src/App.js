import styles from './App.module.css';
import MainPage from './main-page/main-page';
import { Route, Routes} from 'react-router-dom';
import Layout from './layout/layout';
import MovieDescription from './movie-description/movie-description';


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
            path='movie-description' 
            element={<MovieDescription/>} 
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
