import React, { useState } from 'react'
import c from './search.module.css'

const SearchField = (props) => {

    const notEmptyInput = props.searchInput.trim() !== ''

    const changeSort = e => {
        props.setSort(e.target.value)
    }
    const changeSubj = e => {
        props.setCategory(e.target.value)
    }
    const handleChange = (e) => {
        props.onInputChange(e.target.value)
    }
    const handleSearch = () => {
        props.searchRequest(props.searchInput, props.sort, props.category)
    }

    const onKey = (e) => {
        if (e.key === 'Enter' && notEmptyInput) {
            props.searchRequest(props.searchInput, props.sort, props.category)
        }
    }

    return <div className={c.allWrap}>
        <div className={c.header}>Your Favorite Books</div>
        <div className={c.input}>
            <input type="text" value={props.searchInput} onChange={handleChange} onKeyPress={onKey} placeholder="Search" className={c.searchfield} />
            <button onClick={handleSearch} disabled={!notEmptyInput} >Browse</button>
        </div>
        <div className={c.searchParams} >
            <div className={c.sort}>
                <span>Sort by:</span>
                <select value={props.sort} onChange={changeSort}>
                    <option value="relevance">Relevance</option>
                    <option value="newest">Newest</option>
                </select>
            </div>
            <div className={c.category}>
                <span>Category:</span>
                <select value={props.category} onChange={changeSubj} >
                    <option value="all">all</option>
                    <option value="art">art</option>
                    <option value="biography">biography</option>
                    <option value="computers">computers</option>
                    <option value="history">history</option>
                    <option value="medical">medical</option>
                    <option value="poetry">poetry</option>
                </select>
            </div>
        </div>
    </div>
}

export default SearchField

