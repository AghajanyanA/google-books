import axios from "axios";

const api_key = 'AIzaSyCjrtsYSI9-JRxZrEih7rGxBf6MS-Z751s'

export const searchQuery = (query, sort, category) => (    
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&order_by=${sort}${category !== 'all' ? `&subject=${category}` : ''}&key=${api_key}`)
)

export const loadMore = (query, sort, category, startIndex) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&order_by=${sort}${category !== 'all' ? `&subject=${category}` : ''}&key=${api_key}&startIndex=${startIndex}&maxResults=30`)
}

export const getBookData = id => (
    axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
)
