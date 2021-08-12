import React from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

export default function App() {
  const [cities, setCities] = useState([]); // el estado de mi componente app
  
  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
  
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(respuesta => respuesta.json()) //devuelve la data en un objeto
      .then(recurso => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
    }
  
    function onClose(id) {
      setCities(oldCities => oldCities.filter(city => city.id !== id));
    }
//tengo que renderizar el nav y el Cards, pasandoles sus props, el onSearch se le pasa  Nav y este se lo pasa a SearchBar
  return (
    <div className="App">  
      <Nav onSearch={onSearch}/>         
      <Cards cities={cities} onClose={onClose}/>
    </div>
  );
}



