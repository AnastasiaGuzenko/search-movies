import { useState } from "react"

const Header = () => {
  const [valueInput, setValueInput] = useState('');

  const handleValueInput = (e) => {
    setValueInput(e.target.value)
  }

  const callSearchFunction = (e) => {
    console.log('callSearchFunction');
    setValueInput('')
  }


  return (
    <div>
      <button
        onClick={callSearchFunction}
      >
        На главную
      </button>
      <input 
        type="text"
        value={valueInput}
        onChange={handleValueInput}
      />
    </div>
  )
}

export default Header