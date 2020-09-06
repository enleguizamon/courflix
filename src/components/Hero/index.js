import React from 'react';
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'

class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      thumbsUp: "white",
      thumbsDown: "white"
    }
  }

  handleClickUp() {
    const { thumbsUp, thumbsDown } = this.state;
    if (thumbsUp == "white") {
      this.setState({
        thumbsUp: "green",
        thumbsDown: "white"
      })
    } else {
      this.setState({
        thumbsUp: "white"
      })
    }
  }

  handleClickDown() {
    const { thumbsUp, thumbsDown } = this.state;
    if (thumbsDown == "white") {
      this.setState({
        thumbsUp: "white",
        thumbsDown: "red"
      })
    } else {
      this.setState({
        thumbsDown: "white"
      })
    }
  }

  handleClick() {
    console.log("hola")
    this.setState({
      play: true
    })
  }

  render() {
    const { data, showThumbs } = this.props;
    let icons;

    if (showThumbs) {
      icons = <>
        <FontAwesomeIcon icon={faThumbsUp} className={`icon ${this.state.thumbsUp}`} onClick={() => this.handleClickUp()} />
        <FontAwesomeIcon icon={faThumbsDown} className={`icon i1 ${this.state.thumbsDown}`} onClick={() => this.handleClickDown()} />
      </>
    }

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
        <button className="button b1" onClick={()=> this.handleClick()} ><FontAwesomeIcon icon={faPlay} className="play" />Reproducir</button>
        <button className="button"><FontAwesomeIcon icon={faPlus} className="plus" />Mi lista</button>
        {icons}
        <p className="sinopsis">{data.description}</p>
      </div>
    );
  }
}

export default Hero;
