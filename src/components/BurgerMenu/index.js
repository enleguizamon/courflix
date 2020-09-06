import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import './style.scss'

class BurgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="menuWrapper">
      <Menu>
        <div className="burgerLinkContainer">
          <a href="#" className="burgerLink inicio">Inicio</a>
          <a href="#series" className="burgerLink">Series</a>
          <a href="#peliculas" className="burgerLink">Películas</a>
          <a href="#recientementeAgregado" className="burgerLink">Agregados recientemente</a>
          <a href="#" className="burgerLink">Mi lista</a>
          <a onClick={this.showSettings} className="menu-item--small" href=""></a>
        </div>
      </Menu>
      </div>
    )
  }
}

export default BurgerMenu;