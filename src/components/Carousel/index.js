import React from 'react';
import './style.scss'
import InnerCarousel from '../InnerCarousel';

class Carousel extends React.Component {
  render() {
    return (
      <div className="carouselWrapper">
        <h3 className="carouselTitle">Series</h3>
        <InnerCarousel filter={"series"} />
        <h3 className="carouselTitle">Películas</h3>
        <InnerCarousel filter={"pelis"} />
        <h3 className="carouselTitle">Series Recomendadas</h3>
        <InnerCarousel filter={"seriesRecomendadas"} />
      </div>
    );
  }
}

export default Carousel;