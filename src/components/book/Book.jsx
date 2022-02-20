import React from "react";
import c from './book.module.css'

const Book = ({ book }) => {
    const author = book?.authors
    const mediumThumbnail = book?.imageLinks?.large
    const bookPageCount = book?.pageCount
    const title = book?.title
    const pubDate = book?.publishedDate
    const description = book?.description

    return (
        <div className={c.wrapper}>
            <img src={mediumThumbnail} alt="ok no img!" />
            <div className={c.info} >
                <header>{title}</header>
                <p>Written by "{author}"</p>
                <p>Published on {pubDate}</p>
                <p>This book has {bookPageCount} pages.</p>
                {description ? <p>Description:</p> : '' }
                <p className={c.description} > {description} </p>
            </div>
        </div>
    )
}
export default Book