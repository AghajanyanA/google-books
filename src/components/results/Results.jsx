import React, { useState } from 'react'
import c from './results.module.css'
import Preloader from '../../assets/Preloader/Preloader'
import Card from './Card/Card'

const Results = (props) => {

    const [currentLoad, setCurrentLoad] = useState(10)

    const loadMore = () => {
        props.loadMoreButton(props.searchInput, props.sort, props.category, currentLoad)
        setCurrentLoad(currentLoad + 30)
    }

    return (
        <div className={c.allWrap}>

            {props.isLoading && <Preloader />}
            {!props.isSearched ? <h3>{props.text}</h3> :
                <div>
                    <h3 className={c.resultsCount}>Results Found: {props.totalItems}</h3>
                    <div className={c.cards}>
                        {props.results?.map(data => <Card key={data.id} data={data} /> )}
                    </div>
                    {props.isLoading ? '' : <button className={c.loadMoreBTN} onClick={loadMore} disabled={props.noMoreResults} >{props.noMoreResults ? 'No more results found' : 'Load More'} </button> }
                </div>}

        </div>
    )
}

export default Results

