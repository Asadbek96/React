import React from "react";

export default function BookCard(props) {
  return (
    <div className='book-card'>
      <img src={props.img} alt='profile-img' />
      <h2>{props.name}</h2>
      <p>Автор: {props.author}</p>
      <p>Шыққан жылы: {props.year}</p>
    </div>
  )
}