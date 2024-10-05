import { useCallback, useEffect, useState } from "react"
import Grid from "./components/Grid"
import Figure from "./components/Figure"
import Keyboard from "./components/Keyboard"
import TriedLetters from "./components/TriedLetters"

function App() {
  const [word, setWord] = useState([])
  const [loading, setLoading] = useState(true)
  const [goodResponseList, setGoodResponseList] = useState([])
  const [badResponseList, setBadResponseList] = useState([])
  const [fetchError, setFetchError] = useState(null)
  const [count, setCount] = useState(6)
  const [message, setMessage] = useState('')

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

  const decision = useCallback((word, goodResponseList, count) => {
    const foundAllLetters = word.every(letter => goodResponseList.includes(letter))
    if (foundAllLetters) {
        setMessage('Félicitations, vous avez gagné !')
    }
    if (count <= 0) {
        setMessage(`Fin de la partie. Le mot était : ${word.join('').toUpperCase()}`)
    }
  }, [])

  useEffect(() => {
      decision(word, goodResponseList, count)
  }, [word, goodResponseList, count, decision])

  if (loading) return <h1>Fetching word...</h1>
  if (fetchError) return <h1>Word not loaded:</h1>

  return (
    <>
      <div className="top">
        <h1>Hangman</h1>
      </div>
      <Grid word={word} goodResponseList={goodResponseList}/>
      <h2 style={{margin: '10px 0', fontSize: '28px'}}>Score: {count}</h2>
      <h3>{message}</h3>
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
          message={message}/>
        <TriedLetters lettersList={badResponseList}/>
      </div>
    </>
  )
}

export default App
