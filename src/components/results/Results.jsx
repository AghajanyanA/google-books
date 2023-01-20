import React, { useState } from 'react'
import c from './results.module.css'
import Preloader from '../../assets/Preloader/Preloader'
import { Link } from 'react-router-dom'

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
                        {props.results?.map(data => <div key={data.id} className={c.card} >
                            <Link to={`/${data.id}`}>
                                <img src={data.volumeInfo?.imageLinks?.thumbnail} alt="sorry" className={c.image} />
                            </Link>
                            <p className={c.title} >
                                <Link to={`/${data.id}`}> {data.volumeInfo.title} </Link>
                            </p>
                            <div className={c.cardBottomWrap} >
                                {data.volumeInfo.authors ? <div className={c.authors} > {data.volumeInfo.authors.join(', ')} </div> : ''}
                                <span className={c.categories} > {data.volumeInfo.categories} </span>
                            </div>
                        </div>)}
                    </div>
                    {props.isLoading ? '' : <button className={c.loadMoreBTN} onClick={loadMore} disabled={props.noMoreResults} >{props.noMoreResults ? 'No more results found' : 'Load More'} </button> }
                </div>}

        </div>
    )
}

export default Results

