import React from "react";
import './card.styles.css'
export const Card = (props) => {
  console.log(props)
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt='Monster'/>
      <h2>{props.monster.name}</h2>
      <h2>{props.monster.email}</h2>
    </div>
  );
};

