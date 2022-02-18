import axios from "axios";

const api_key = 'AIzaSyCjrtsYSI9-JRxZrEih7rGxBf6MS-Z751s'

export const searchQuery = (query, sort, category) => (    
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&order_by=${sort}${category !== 'all' ? `&subject=${category}` : ''}&key=${api_key}`)
)

export const loadMore = (query, sort, category) => (    
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&order_by=${sort}${category !== 'all' ? `&subject=${category}` : ''}&key=${api_key}&maxResults=30`)
)