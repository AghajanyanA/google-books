import React from 'react'
import c from './search.module.css'

const SearchField = (props) => {


    const handleChange = (e) => {
        props.onInputChange(e.target.value)
    }
    const handleSearch = (e) => {
        console.log(e)
    }
    
    return <div className={c.allWrap}>
        <div className={c.header}>Your Favorite Books</div>
        <div className={c.input}>
            <input type="text" value={props.searchInput} onChange={handleChange} placeholder="Search" className={c.searchfield} />
            <button onClick={handleSearch} >Browse</button>
        </div>
        <div className={c.searchParams} >
            
        </div>
    </div>
}

export default SearchField

