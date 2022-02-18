import React from 'react'
import c from './blankresult.module.css'

const BlankResult = (props) => {

    const loadMore = () => {
        props.loadMoreButton(props.searchInput, props.sort, props.category)
    }

    return (
        <div className={c.allWrap}>

            {!props.isSearched ? <h3>Make A Search!</h3> :
                <div>
                    <h3 className={c.resultsCount}>Results Found: { props.totalItems }</h3>
                    <div className={c.cards}>
                        {props.results.map(data => <div key={data.id} className={c.card} >
                            <img src={ data.volumeInfo?.imageLinks?.thumbnail } alt="sorry" className={c.image} />
                            <span className={c.title} >{ data.volumeInfo.title }</span>
                            <div className={c.cardBottomWrap} >
                                { data.volumeInfo.authors ? <span className={c.authors} > { data.volumeInfo.authors.join(', ') } </span> : ''}
                                <span className={c.categories} > { data.volumeInfo.categories } </span>
                            </div>
                        </div>)}</div>

                    <button className={c.loadMoreBTN} onClick={loadMore} >Load More</button>
                </div>}

        </div>
    )
}

export default BlankResult

