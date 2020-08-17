import React from 'react';
import './style.scss'
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { elem } = this.props;
    return (
      <div className="cardWrapper">
        <Link to={`/watch/${elem.id}`}>
        <img className="img" src={elem.img} />
        </Link>
      </div>
    );
  }
}

export default Card;