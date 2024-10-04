import PropTypes from 'prop-types'

export default function Grid({word, goodResponseList}){
    return(
    <div className="grid">
        {
            word.map((letter, index) => (
                <SingleLetter key={`${btoa(letter)}-${btoa(index)}`} letter={letter} toShow={goodResponseList.includes(letter) ? true : false}/>
            ))
        }
    </div>
    )
}

function SingleLetter({letter, toShow}) {
    return <div className="letter">{toShow ? letter.toUpperCase() : ''}</div>
}

Grid.propTypes = {
    word: PropTypes.array,
    goodResponseList: PropTypes.array
}

SingleLetter.propTypes = {
    letter: PropTypes.string,
    toShow: PropTypes.bool
}
