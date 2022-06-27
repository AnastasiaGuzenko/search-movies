import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './header.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

const Header = ({
  setMoviesSearchValue,
  setVisible,
}) => {

  const [inputValue, setInputValue] = useState('');
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleUpButton = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const search = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&api_key=4fff9675d3d2dfe17c3c52af125bcd71&language=en-US`)
      .then(response => response.json())
      .then(jsonResponse => {
        setMoviesSearchValue(jsonResponse.results)
        setVisible(true)
        setInputValue('')
      }
    )
  }
 
  const className = cx(styles.header, {
    scroll: scroll < 300,
  });

  return (
    <div
      onClick={handleUpButton}
      className={className}
    >
      <div
        className={styles['main-link']}
      >
        <button
          className={styles.btn}
        >
          <Link
            className={styles.link}
            to="/search-movies"
          >
            Main
          </Link>
        </button>
      </div>
      <div 
        className={styles.search}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleInputValue}
          className={styles.input}
        />
        <button
          onClick={search}
          className={styles.btn}
        >
          <Link
            className={styles.link}
            to={'/search-movies/search'}
          >
            Search
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
