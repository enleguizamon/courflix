import React from 'react';
import './style.scss'
import data from '../../data/courflixData.json'

class Hero extends React.Component {
  render() {
    return (
      <div className="hero-container" style={{ backgroundImage: `url(${data[0].img})` }}>
        <h3 className="subtitle">Original de COURFLIX</h3>
        <h1 className="serie-title">{data[0].title}</h1>
        <button className="button b1">Reproducir</button>
        <button className="button">+ Mi lista</button>
        {/*<p className="temp1">Ve la temporada 1</p>*/}
        <p className="sinopsis">{data[0].description}</p>
      </div>
    );
  }
}

export default Hero;
