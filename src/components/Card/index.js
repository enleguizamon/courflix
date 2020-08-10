import React from 'react';
import './style.scss'

class Card extends React.Component {
  render() {
    const { img } = this.props;
    return (
      <div className="cardWrapper">
        <img className="img" src={img} />
      </div>
    );
  }
}

export default Card;