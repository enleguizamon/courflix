import React from 'react';
import './style.scss';
import Card from '../Card'
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
    const { filter } = this.props;
    const { data } = this.props;
    return (
      <div className="innerWrapper">
        <Slider {...this.settings} className="slick">
          {data.map((elem, key) => {
            if (elem.type == filter) {
              return (
                <Card key={key} elem={elem} />
              )
            }
          })}
        </Slider>
      </div>
    );
  }
}

export default InnerCarousel;