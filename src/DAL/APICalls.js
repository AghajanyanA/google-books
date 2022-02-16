import axios from "axios";

export const searchQuery = (query, category, sort) => (    
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&order_by=${sort}${category !== 'all' ? `&subject=${category}` : null}`)
    .then()
    .catch()
)