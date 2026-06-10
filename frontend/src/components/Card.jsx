import './Card.css'
function Card ( {name , rating} ) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{rating}</p>
        </div>
    )
}
export default Card