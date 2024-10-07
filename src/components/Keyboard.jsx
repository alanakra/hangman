import '../keyboard.scss'
import PropTypes from 'prop-types'
import { useCallback, useEffect } from 'react'

const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz-')

export default function Keyboard({
    rightWord, 
    setGoodResponseList, 
    badResponseList, 
    goodResponseList, 
    setBadResponseList, 
    setCount, 
    count, 
    setMessage}) {

    const isLetterIncluded = useCallback((letter) => {
        if (rightWord.includes(letter)) {
            if (!goodResponseList.includes(letter)) {
                setGoodResponseList([...goodResponseList, letter])
                setMessage('Good response')
            } else {
                setMessage('You already guessed that letter.')
            }
        } else {
            if (!badResponseList.includes(letter)) {
                setBadResponseList([...badResponseList, letter])
                setMessage('Bad response')
                setCount(count - 1)
            } else {
                setMessage('You already guessed that bad letter.')
            }
        }

        const foundAllLetters = rightWord.every(letter => goodResponseList.includes(letter))
        console.warn(goodResponseList)
        console.warn(rightWord)
        console.warn(foundAllLetters)
        if (foundAllLetters) {
            setMessage('Félicitations, vous avez gagné !')
        }
        if (count <= 0) {
            setMessage(`Fin de la partie. Le mot était : ${rightWord.join('').toUpperCase()}`)
        }
    }, [badResponseList, count, goodResponseList, rightWord, setBadResponseList, setCount, setGoodResponseList])

    useEffect(() => {
        const handleKeyUp = (e) => {
            const key = e.key.toLowerCase()
            if (alphabet.includes(key)) {
                isLetterIncluded(key)
            }
        }

        window.addEventListener('keyup', handleKeyUp)
        return () => {
            window.removeEventListener('keyup', handleKeyUp)
        }
    }, [isLetterIncluded])
    
    const handleClickBtn = e => {
        const letter = e.target.getAttribute('data-letter').toLowerCase()
        if (letter) {
            isLetterIncluded(letter)
        }
    }

    return (
        <div>
            <div className="keyboard-cont" onClick={handleClickBtn}>
                <div className="first-row">
                    <button className="keyboard-button" data-letter="A">a</button>
                    <button className="keyboard-button" data-letter="B">b</button>
                    <button className="keyboard-button" data-letter="C">c</button>
                    <button className="keyboard-button" data-letter="D">d</button>
                    <button className="keyboard-button" data-letter="E">e</button>
                    <button className="keyboard-button" data-letter="F">f</button>
                    <button className="keyboard-button" data-letter="G">g</button>
                    <button className="keyboard-button" data-letter="H">h</button>
                    <button className="keyboard-button" data-letter="I">i</button>
                    <button className="keyboard-button" data-letter="J">j</button>
                </div>
                <div className="second-row">
                    <button className="keyboard-button" data-letter="K">k</button>
                    <button className="keyboard-button" data-letter="L">l</button>
                    <button className="keyboard-button" data-letter="M">m</button>
                    <button className="keyboard-button" data-letter="N">n</button>
                    <button className="keyboard-button" data-letter="O">o</button>
                    <button className="keyboard-button" data-letter="P">p</button>
                    <button className="keyboard-button" data-letter="Q">q</button>
                    <button className="keyboard-button" data-letter="R">r</button>
                    <button className="keyboard-button" data-letter="S">s</button>
                    <button className="keyboard-button" data-letter="T">t</button>
                </div>
                <div className="third-row">
                    <button className="keyboard-button" data-letter="U">u</button>
                    <button className="keyboard-button" data-letter="V">v</button>
                    <button className="keyboard-button" data-letter="W">w</button>
                    <button className="keyboard-button" data-letter="X">x</button>
                    <button className="keyboard-button" data-letter="Y">y</button>
                    <button className="keyboard-button" data-letter="Z">z</button>
                    <button className="keyboard-button" data-letter="-">-</button>
                </div>
            </div>
        </div>
    )
}

Keyboard.propTypes = {
    rightWord: PropTypes.array,
    setGoodResponseList: PropTypes.func,
    badResponseList: PropTypes.array,
    goodResponseList: PropTypes.array,
    setBadResponseList: PropTypes.func,
    setCount: PropTypes.func,
    count: PropTypes.number,
    setMessage: PropTypes.func
}
