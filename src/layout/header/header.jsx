import { useState } from "react"
import { Link } from "react-router-dom";

const Header = () => {
  const [valueInput, setValueInput] = useState('');

  const handleValueInput = (e) => {
    setValueInput(e.target.value)
  }

  // const callSearchFunction = (e) => {
  //   console.log('callSearchFunction');
  //   setValueInput('')
  // }


  return (
    <div>
      <Link 
        to="/">
        Главная
      </Link>
      {/* <Link 
        to="movie-description/:id">
        *Страница описания
      </Link> */}
      <input 
        type="text"
        value={valueInput}
        onChange={handleValueInput}
      />
    </div>
  )
}

export default Header