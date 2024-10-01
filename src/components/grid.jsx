export default function Grid({word}){
    const arrWord = [...word]
    return(
    <div className="grid">
        {
            arrWord.map((letter, index) => (
                <SingleLetter key={`${letter}-${index}`} letter={letter}/>
            ))
        }
    </div>
    )
}

function SingleLetter({letter}) {
    return <div className="letter">{letter.toUpperCase()}</div>
}
