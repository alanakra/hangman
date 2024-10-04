import '../keyboard.scss'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
export default function Keyboard({rightWord, setGoodResponseList, badResponseList, goodResponseList, setBadResponseList, setCount, count}){
    const [letterInput, setLetterInput] = useState('')
    const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz-')
    const [message, setMessage] = useState('')
    
    useEffect(() => {
        const handleKeyUp = (e) => {
            const key = e.key
            console.log(key)
            if(alphabet.includes(key)) {
                setLetterInput(e.key)
                isLetterIncluded(key)
            }
        }
        window.addEventListener('keyup', handleKeyUp)
        return () => {
            window.removeEventListener('keyup', handleKeyUp)
        }
    }, [letterInput])

    const handleClickBtn = e => {
        const letter = e.target.getAttribute('data-letter').toLowerCase()
        console.log(letter)
        if (letter != null) {
            setLetterInput(letter)
            isLetterIncluded(letter)
        }
    }

    const isLetterIncluded = (letterInput) => {
        console.log('Letter input -> : ',letterInput,', ','Bad response list: ->', badResponseList)
        if (rightWord.includes(letterInput)) {
            const cloneGoodResponseList = [...goodResponseList]
            if (cloneGoodResponseList.includes(letterInput)) {
                console.log('You already guessed that letter.')
                setMessage('You already guessed that letter.')
            } else {
                cloneGoodResponseList.push(letterInput)
                setGoodResponseList(cloneGoodResponseList)
                setMessage('Good response')
                console.log('Good response: ->', goodResponseList)
            }
        } else {
            const cloneBadResponseList = [...badResponseList]
            if (!cloneBadResponseList.includes(letterInput)) {
                cloneBadResponseList.push(letterInput)
                console.log('Not included')
                setMessage('Bad reponse')
                setBadResponseList(cloneBadResponseList)
                setCount(count - 1)
            } else {
                setMessage('You already guessed that bad letter.')
            }
        }
    }

    return(
        <div>
            <h3 style={{textAlign: 'center', textTransform: 'uppercase'}}>{letterInput}</h3>
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
            <p>{message}</p>
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
    count: PropTypes.number
}
