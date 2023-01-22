import React from "react";
import c from "./Card.module.css"
import { Link } from 'react-router-dom'

const Card = function ({data}) {
  return (
    <div className={c.card}>
      <Link to={`/${data.id}`}>
        <img
          src={data.volumeInfo?.imageLinks?.thumbnail}
          alt="sorry"
          className={c.image}
        />
      </Link>
      <p className={c.title}>
        <Link to={`/${data.id}`}> {data.volumeInfo.title} </Link>
      </p>
      <div className={c.cardBottomWrap}>
        {data.volumeInfo.authors ? <div className={c.authors}> {data.volumeInfo.authors.join(", ")} </div> : ""}
        <span className={c.categories}> {data.volumeInfo.categories} </span>
      </div>
    </div>
  );
};

export default Card