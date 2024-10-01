import PropTypes from 'prop-types';

export default function TriedLetters({lettersList}) {
    const stopDuplicate = new Set(lettersList)
    return(
        <>
            <h1>Bad responses</h1>
            <div className="container"
            style={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: '2.3rem',
                textDecoration: 'line-through',
                gap: '20px'
            }}>
                {
                    Array.from(stopDuplicate).map((letter, index) => (
                        <p key={`${letter}-${index}`}>{letter}</p>
                    ))
                }
            </div>
        </>
    )
}

TriedLetters.propTypes = {
    lettersList: PropTypes.array
}
