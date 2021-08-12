import React, { useState } from "react";
import search from '../stylesComponents/searchBar.module.css';

export default function SearchBar({onSearch}) { //este es invocado por nav, por eso a nav le paso la funcion onSearch para que luego s ela pase al componente searchBar 
  const [city, setCity] = useState(""); //estado de este componente
  
  return (
    <div className ={search.buscar}>
      <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity('');
      }}>
        <input
          type="text"
          placeholder="Ciudad..."
          value={city}
          onChange={e=>setCity(e.target.value)}
          className = {search.input}
        />
        <input type="submit" value="Agregar" className={search.btnSearch}/>   
      </form>
    </div>
  );
}