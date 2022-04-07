import { Link } from "react-router-dom";
import { useState} from "react";
import styles from './header.module.css'

const Header = ({
  setMoviesSearchValue,
  setVisible
}) => {
  const [inputValue, setInputValue] = useState('');

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

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles['link-home']}>
          <button>
            <Link 
              to="/">
              Главная
            </Link>
          </button>
        </div>
        <div className={styles.search}>
          <input 
            type="text"
            value={inputValue}
            onChange={handleInputValue}
            className={styles.input}
          />
          <button 
            onClick={search}>
              <Link 
                to={'/search'}>
                Search
              </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header