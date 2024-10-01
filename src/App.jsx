import { useEffect, useState } from "react"
import Grid from "./components/grid"

function App() {
  const [word, setWord] = useState('')
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    async function fetchWord() {
      try {
        const response = await fetch("http://localhost:3333", {
          method: 'POST'
        })
        const data = await response.json()
        setLoading(false)
        if (word === "") {
          setWord(data.word)
        }
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
        <h2 className="word">{word.toUpperCase()}</h2>
      </div>
      <Grid word={word}/>
    </>
  )
}

export default App
