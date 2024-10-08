import '../styles/triedletters.scss'
import PropTypes from 'prop-types';

export default function TriedLetters({lettersList}) {
    return(
        <div className="tried-container">
            <h1>List of bad responses</h1>
            <div className="list">
                {
                    Array.from(lettersList).map((letter, index) => (
                        <p key={`${letter}-${index}`}>{letter}</p>
                    ))
                }
            </div>
        </div>
    )
}

TriedLetters.propTypes = {
    lettersList: PropTypes.array
}
