import './News.css';
import {fetchNews} from '../services/news';
import { useEffect, useState } from 'react';
import {NewCard} from './NewCard';
export function News() {
    const [news, setNews] = useState([]);
    useEffect(() => {
        async function getNews() {
            const newsData = await fetchNews();
            setNews(newsData);
        }      
        getNews();
}, []);
return (
    <div className='news-container'>
        <h2 className='news-title'>News</h2>
        <ul className='news-list'>
            {news.map(article => (
               <li key={article.url}>
                    <NewCard article={article}/>
               </li> 
            ))}
        </ul>
    </div>

)
}