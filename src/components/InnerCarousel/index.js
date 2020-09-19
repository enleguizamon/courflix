import React from 'react';
import './style.scss';
import Card from '../Card'
import Slider from 'react-slick';

class InnerCarousel extends React.Component {
  constructor(props) {
    super(props);
    //library slick
    this.settings = {
      infinite: true,
      speed: 1000,
      arrows: true,
      adaptiveHeight: true,
      variableWidth: true,
      slidesToShow: 4,
      slidesToScroll: 1,
    }
  }

  render() {
    const { filter, data } = this.props;
    //el if es para el último carousel, cuando local storage esté vacío.
    if (!data) {
      data = []
    }
    return (
      <div className="innerWrapper">
        <Slider {...this.settings} className="slick">
          {data.map((elem, key) => {
            if (!filter || elem.type == filter) {
              {/*!filter es para el carousel de "mi lista"que no tiene esa prop definida.
              type es un atributo del json que indica el tipo de contenido, pelis, series, agregado recientemente*/}
              return (
                <Card key={key} elem={elem} />
              );
            }
          })}
        </Slider>
      </div>
    );
  }
}

export default InnerCarousel;