import PropTypes from 'prop-types';

export default function TriedLetters({lettersList}) {
    return(
        <div>
            <h1 style={{ textAlign: 'center', textTransform: 'uppercase' }}>List of bad responses</h1>
            <div className="container"
            style={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: '2.3rem',
                textDecoration: 'line-through',
                gap: '20px',
                textTransform: 'uppercase'
            }}>
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
