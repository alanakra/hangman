import PropTypes from 'prop-types'

export default function Grid({word}){
    return(
    <div className="grid">
        {
            word.map((letter, index) => (
                <SingleLetter key={`${btoa(letter)}-${btoa(index)}`} letter={letter}/>
            ))
        }
    </div>
    )
}

function SingleLetter({letter}) {
    return <div className="letter">{letter.toUpperCase()}</div>
}

Grid.propTypes = {
    word: PropTypes.array
}

SingleLetter.propTypes = {
    letter: PropTypes.string
}
