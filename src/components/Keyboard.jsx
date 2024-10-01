import '../keyboard.scss'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react'
export default function Keyboard({rightWord, setGoodResponseList, badResponseList, setBadResponseList}){
    const [letterInput, setLetterInput] = useState('')
    const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz-');
    
    useEffect(() => {
        const handleKeyUp = (e) => {
            const key = e.key
            if(alphabet.includes(key)) {
                setLetterInput(e.key)
                isLetterIncluded(letterInput)
            }
        }
        window.addEventListener('keyup', handleKeyUp)
        return () => {
            window.removeEventListener('keyup', handleKeyUp)
        }
    }, [])

    const handleClickBtn = e => {
        const letter = e.target.getAttribute('data-letter').toLowerCase()
        setLetterInput(letter)
        isLetterIncluded(letterInput)
    }

    const isLetterIncluded = letterInput => {
        if (rightWord.includes(letterInput)) {
            console.log('good')
        } else {
            const cloneBadResponseList = badResponseList.slice()
            cloneBadResponseList.push(letterInput)
            console.log(cloneBadResponseList)
            setBadResponseList(cloneBadResponseList)
            console.log('bad')
        }
    }

    return(
        <>
            <h3 style={{textAlign: 'center', textTransform: 'uppercase'}}>{letterInput}</h3>
            <div className="keyboard-cont">
                <div className="first-row">
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="A">a</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="B">b</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="C">c</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="D">d</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="E">e</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="F">f</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="G">g</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="H">h</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="I">i</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="J">j</button>
                </div>
                <div className="second-row">
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="K">k</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="L">l</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="M">m</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="N">n</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="O">o</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="P">p</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="Q">q</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="R">r</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="S">s</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="T">t</button>
                </div>
                <div className="third-row">
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="U">u</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="V">v</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="W">w</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="X">x</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="Y">y</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="Z">z</button>
                    <button className="keyboard-button" onClick={handleClickBtn} data-letter="-">-</button>
                </div>
            </div>
        </>
    )
}

Keyboard.propTypes = {
    rightWord: PropTypes.array,
    setGoodResponseList: PropTypes.function,
    badResponseList: PropTypes.array,
    setBadResponseList: PropTypes.function
}
