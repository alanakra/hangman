import '../styles/hangman.scss'
import PropTypes from 'prop-types'
export default function Figure({count}){
    let className = ""
    for(let i = 0; i < count; i++) {
        className += (`hang${i} `)
    }
    return(
        <>
            <div className={`hangman ${className}`}>
                <div className="shaft"></div>
                <div className="pole"></div>  
                <div className="rope"></div>
                <div className="base"></div>
                <div className="man">
                    <div className="wrapperMan">
                    <div className="face"></div>
                    <div className="hands"></div>
                    <div className="legs"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

Figure.propTypes = {
    count: PropTypes.number
}
