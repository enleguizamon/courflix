import React from 'react';
import './style.scss';
import Card from '../Card'
import data from '../../data/courflixData.json'
import Slider from 'react-slick';

class InnerCarousel extends React.Component {
  constructor(props) {
    super(props);

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
    return (
      <div className="innerWrapper">
        <Slider {...this.settings} className="slick">
          {data.map((elem, key) => {
            if (elem.type == this.props.filter) {
              return (
                <Card key={key} img={elem.img} />
              )
            }
          })}
        </Slider>
      </div>
    );
  }
}

export default InnerCarousel;