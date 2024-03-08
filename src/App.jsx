import { movies } from './Components/Movies'
import {useState, useEffect} from 'react'
import './App.css'

function App() {
  function Send () {
    if (input.length > 0) {
      if (input.toUpperCase() === movie.name.toUpperCase()){
        const newCounter = counter+1
        setCounter(newCounter)
        setInput ("")
      }
      else { 
        setInput ("")
      }
    }
  }
  const [counter, setCounter] = useState (0)
  const [input, setInput] = useState ("")
  const [movie, setMovie] = useState ("")

  
  useEffect(() => {
    setMovie(movies[Math.floor(Math.random() * movies.length)]);
  }, [counter]);

return (
    <>
      <div>
        <h3 className="Points">Points: {counter}</h3>
        <h1 className="title">Guess the movie</h1>
        <h2 className= "emoji"> {movie.emoji} </h2>
        <form>
          <input className = "input" type="text" value={input} onChange={(e) => setInput(e.target.value)}  required/>
          <button onClick={Send} className="boton">Send</button>
        </form>
      </div>
    </>
  )
}

export default App
