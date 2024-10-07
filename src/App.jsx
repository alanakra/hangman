import { useEffect, useState } from "react"
import Grid from "./components/Grid"
import Figure from "./components/Figure"
import Keyboard from "./components/Keyboard"
import TriedLetters from "./components/TriedLetters"
import PopupEnd from "./components/PopupEnd"
import SwitchLang from "./components/SwitchLang"
import './styles/index.scss'

function App() {
  const [word, setWord] = useState([])
  const [loading, setLoading] = useState(true)
  const [goodResponseList, setGoodResponseList] = useState([])
  const [badResponseList, setBadResponseList] = useState([])
  const [fetchError, setFetchError] = useState(null)
  const [count, setCount] = useState(6)
  const [message, setMessage] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [langChecked, setLangChecked] = useState(false) 

  async function fetchWord(isLangFR = false) {
    try {
      const response = await fetch("http://localhost:3333", {
        method: 'POST',
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          "locale": `${isLangFR ? 'fr-FR' : 'en-GB' }`
        })
      })
      const data = await response.json()
      const word = data.word
      const convertedWord = [...word]
      setWord(convertedWord)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching the word:", error)
      setLoading(false)
      setFetchError(true)
    }
  }

  useEffect(() => {
    fetchWord()
  }, [])

  function restartGame(lang) {
    setLoading(true)
    setBadResponseList([])
    setGoodResponseList([])
    setCount(6)
    setMessage('')
    setModalIsOpen(false)
    fetchWord(lang)
  }

  function handleChangeLang (e) {
    e.stopPropagation()
    setLangChecked(e.target.checked)
    restartGame(e.target.checked)
  }

  if (loading) return <h1>Fetching word...</h1>
  if (fetchError) return <h1>Word not loaded:</h1>

  return (
    <>
      <PopupEnd 
        message={message} 
        modalIsOpen={modalIsOpen}
        restartGame={restartGame}/>
      <div className="top">
        <h1>Hangman - {langChecked ? 'French' : 'English'}</h1>
        <SwitchLang 
          langChecked={langChecked} 
          setLangChecked={setLangChecked}
          handleChangeLang={handleChangeLang}/>
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
          setModalIsOpen={setModalIsOpen}
          modalIsOpen={modalIsOpen}/>
        <TriedLetters lettersList={badResponseList}/>
      </div>
    </>
  )
}

export default App
