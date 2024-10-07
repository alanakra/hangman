import { useEffect, useState } from "react"
import Grid from "./components/Grid"
import Figure from "./components/Figure"
import Keyboard from "./components/Keyboard"
import TriedLetters from "./components/TriedLetters"
import PopupEnd from "./components/PopupEnd"

function App() {
  const [word, setWord] = useState([])
  const [loading, setLoading] = useState(true)
  const [goodResponseList, setGoodResponseList] = useState([])
  const [badResponseList, setBadResponseList] = useState([])
  const [fetchError, setFetchError] = useState(null)
  const [count, setCount] = useState(6)
  const [message, setMessage] = useState('')
  const [modalIsOpen, setIsOpen] = useState(false)

  useEffect(() => {
    async function fetchWord() {
      try {
        const response = await fetch("http://localhost:3333", {
          method: 'POST'
        })
        const data = await response.json()
        const word = data.word
        const convertedWord = [...word]
        console.log(convertedWord)
        setWord(convertedWord)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching the word:", error)
        setLoading(false)
        setFetchError(true)
      }
    }

    fetchWord();
  }, [])

  if (loading) return <h1>Fetching word...</h1>
  if (fetchError) return <h1>Word not loaded:</h1>

  return (
    <>
      <PopupEnd message={message} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
      <div className="top">
        <h1>Hangman</h1>
      </div>
      <Grid word={word} goodResponseList={goodResponseList}/>      
      <h3 style={{margin: '10px 0', fontSize: '28px'}}>{message}</h3>
      <Figure count={count}/>
      <div className="keyboards">
        <Keyboard 
          rightWord={word} 
          badResponseList={badResponseList} 
          goodResponseList={goodResponseList}
          setBadResponseList={setBadResponseList}
          setGoodResponseList={setGoodResponseList}
          setCount={setCount}
          count={count}
          setMessage={setMessage}
          message={message}
          setIsOpen={setIsOpen}
          modalIsOpen={modalIsOpen}/>
        <TriedLetters lettersList={badResponseList}/>
      </div>
    </>
  )
}

export default App
