import React from 'react';
import cardsStyle from '../stylesComponents/Cards.module.css';
import Card from './Card.jsx';

export default function Cards({cities, onClose}) { //card esta recibiendo la info por propiedades
  return (
    <div className ={cardsStyle.container}>
      {cities?(  //operador ternario
        cities.map(ciudad =>
        <Card
          key = {ciudad.id}
          name = {ciudad.name}
          min = {ciudad.min}
          max = {ciudad.max}
          img = {ciudad.img}
          onClose = {()=>onClose(ciudad.id)}
          />
      ))
    :(<h4>No hay ciudades</h4>)
      }
    </div>
  )
};