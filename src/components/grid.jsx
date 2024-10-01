export default function Grid({word}){
    return(
    <div className="grid">
        {
            word.map((letter, index) => (
                <SingleLetter key={`${letter}-${index}`} letter={letter}/>
            ))
        }
    </div>
    )
}

function SingleLetter({letter}) {
    return <div className="letter">{letter.toUpperCase()}</div>
}
