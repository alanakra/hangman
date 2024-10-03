import { useEffect, useState } from "react"
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
      <div className="top">
        <h1>Hangman</h1>
      </div>
      <Grid word={word}/>
      <h2>{count}</h2>
      <Figure/>
      <Keyboard 
        rightWord={word} 
        badResponseList={badResponseList} 
        setBadResponseList={setBadResponseList}
        setGoodResponseList={setGoodResponseList}
        setCount={setCount}
        count={count}/>
      <TriedLetters lettersList={badResponseList}/>
    </>
  )
}

export default App
