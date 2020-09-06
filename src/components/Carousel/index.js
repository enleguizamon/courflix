import React from 'react';
import './style.scss'
import InnerCarousel from '../InnerCarousel';

class Carousel extends React.Component {
  render() {
    return (
      <div className="carouselWrapper">
        <h3 className="carouselTitle" id="series">Continuar viendo</h3>
        <InnerCarousel data={this.props.data} filter={"series"}/>
        <h3 className="carouselTitle" id="peliculas">Películas</h3>
        <InnerCarousel data={this.props.data} filter={"pelis"} />
        <h3 className="carouselTitle" id="recientementeAgregado">Agregados recientemente</h3>
        <InnerCarousel data={this.props.data} filter={"recientementeAgregado"} />
      </div>
    );
  }
}

export default Carousel;