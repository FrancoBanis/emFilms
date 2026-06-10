import ReactStars from'react-stars';
import './StartRating.css';
export function StartRating({score}) {
 return (
    <>
    <div className='rating'>
            <h3 style={{color: score/2 > 3.5 ?  'gold' : 'grey'}}>{(score/2).toFixed(1)}/5</h3>
            <ReactStars
                count={5}
                value={score/2}
                edit={false}
                size={25}
                activeColor="#ffd700"
            />
            </div>
    </>
 )   
}