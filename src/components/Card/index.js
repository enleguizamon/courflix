import React from 'react';
import './style.scss'
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { elem } = this.props;
    let bar = {width: elem.seen }

    if (elem.seen) {
      return (
        <div className="cardWrapper">
          <Link to={`/watch/${elem.id}`}>
            <img className="img" src={elem.img} />
          </Link>
          <div className="progressBar">
          <div className="progress" style={bar} ></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="cardWrapper">
          <Link to={`/watch/${elem.id}`}>
            <img className="img" src={elem.img} />
          </Link>
        </div>
      )} 
  }
}

export default Card;