import React from "react";
import c from "./book.module.css";

const Book = ({ book }) => {
  const author = book?.authors;
  const image = book?.imageLinks?.thumbnail;
  const bookPageCount = book?.pageCount;
  const title = book?.title;
  const pubDate = book?.publishedDate;
  const description = book?.description;
  const publisher = book?.publisher;
  const subtitle = book?.subtitle;


  return (
    <div className={c.wrapper}>
      <img src={image} alt="ok no img!" />
      <div className={c.info}>
        <h1 className={c.title}>{title}</h1>
        {subtitle ? <h3 className={c.subtitle}>{subtitle}</h3> : null}
        <div className={c.details}>
          <p>Written by {author?.length >= 2 ? author.join(", ") : author}.</p>
          <p>
            Published on <strong>{pubDate}</strong> by <strong>{publisher}</strong>.
          </p>
          <p>This book has <strong>{bookPageCount}</strong> pages.</p>
          {description ? <p className={c.description} > Description <span className={c.descText}> {description} </span> </p> : ""}
        </div>
      </div>
    </div>
  );
};
export default Book;
