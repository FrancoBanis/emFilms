import Card from './Card.jsx'
import './ReviewCard.css'
function ReviewCard ( {filmName, personName, 
    personNameTwo, ratingPerson, ratingPersonTwo}) { 
        return (
            <>
            <div className='review-card'>
            <h2>{filmName}</h2>
                <div className='card-container'>
                <Card name= {personName} rating={ratingPerson}/>
                <Card name= {personNameTwo} rating={ratingPersonTwo}/>
                </div>
            </div>
            </>
        )
}
export default ReviewCard