import '../hangman.scss'
export default function Figure(){
    return(
        <>
            <div className="hangman">
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
