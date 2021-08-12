import React from 'react';
import styleCard from '../stylesComponents/Card.module.css';

export default function Card(props) {
  return ( //no puedo retornar hermano
    <div className={styleCard.card}>
      <div className = 'animate__animated animate__flipInX'>
      <div>
        <button onClick = {props.onClose} className={styleCard.buttonX}>X</button> 
      </div>
      <div>
        <h3>{props.name}</h3>
        <p>Max {props.max} °C</p>
        <p>Min {props.min} °C</p>
      </div>
      <img src={`https://openweathermap.org/img/wn/${props.img}@2x.png`} alt={"img"} className={styleCard.imageClimate}/>
      </div>
    </div>
  )
};
