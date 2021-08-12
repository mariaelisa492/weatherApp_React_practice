import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import { Navbar, Container } from "react-bootstrap";

function Nav({onSearch}) { // es lo mismo que recibir props(objeto) y le haga destructuring props.onSearch
  return (                   // onSearch es una funciòn que vamos a definir en app.js y se pasa como props a nav 
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
              <img
                alt="logo Henry Bootcamp"
                src={Logo}
                width="40"
                height="40"
                className="logoHenry animate__animated animate__flip animate__delay-1s" 
              />{' '}
              <h2 className='animate__animated animate__slideInUp'>Henry Wather App</h2> 
            </Navbar.Brand>
        </Container> 
        <SearchBar onSearch={onSearch}/> 
      </Navbar>
    </>
  ) // aqui se llama a SearchBar que esta recibiendo onSearch pasado por el nav
}

export default Nav;

// tengo que llamar al SearchBar para que se muestre en el navBar