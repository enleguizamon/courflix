import React from 'react';
import './style.scss'
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navContainer">
          <a href="#"><img className="logo" src="https://fontmeme.com/permalink/200718/179c0a6e7157b4da01ae6c279a5001c6.png" alt="netflix-font" border="0"/></a>
          <div className="link-container">
          <a href="#" className="link inicio">Inicio</a>
          <a href="#series" className="link">Series</a>
          <a href="#peliculas" className="link">Películas</a>
          <a href="#recientementeAgregado" className="link">Agregados recientemente</a>
          <a href="#"className="link">Mi lista</a>
          </div>
      </div>
    );
  }
}

export default Navbar;
