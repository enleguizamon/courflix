import React from 'react';
import './style.scss'

class Hero extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="hero-container" style={{ backgroundImage: `linear-gradient(30deg, rgba(0, 0, 0, 0.884), rgba(170, 170, 170, 0.11)), url(${data.imgPortada})` }}>
        <h3 className="subtitle">Original de COURFLIX</h3>
        <h1 className="serie-title">{data.title}</h1>
        <div className="infoWrapper">
          <span className="year">{data.year}</span>
          <span className="age">{data.age}</span>
          <span className="seasons">{data.seasons}</span>
          <span>{data.duration}</span>
        </div>
        <button className="button b1">Reproducir</button>
        <button className="button">+ Mi lista</button>
        <p className="sinopsis">{data.description}</p>
      </div>
    );
  }
}

export default Hero;
