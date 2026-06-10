const API_KEY= import.meta.env.VITE_NEWS_API_KEY;
const URL = 'https://newsapi.org/v2/everything?q=movies+series&language=en&pageSize=5&sortBy=relevancy'

export async function fetchNews() {
    try{
        const response = await fetch(`${URL}&apiKey=${API_KEY}`);
        const data = await response.json()
        return data.articles
    } catch(error) {
        console.log('Error fetching news:', error);
        return [];
    }
}