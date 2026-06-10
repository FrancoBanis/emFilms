import './NewCard.css';
export function NewCard({article}){
    return (
        <>
            <div className='new-container'>
                <h3 className='new-title'>{article.title}</h3>
                <p>{article.description}</p>
                <p>{article.url}</p>
            </div> 
</>
)
}