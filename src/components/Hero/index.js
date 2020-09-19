import React from 'react';
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from 'react-player';


class Hero extends React.Component {
  constructor(props) {
    super(props);
    //estado inicial de like, dislike y reproducir.
    this.state = {
      thumbsUp: "white",
      thumbsDown: "white",
      playVideo: false
    }
  }

  //like
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

  //dislike
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

  //reproducir
  handlePlay() {
    this.setState({
      playVideo: true
    })
  }

  //guardar en local storage para botón "mi lista".
  handleList(data) {
    const stringfiedList = localStorage.getItem('list')
    if (stringfiedList) {
      const parsedList = JSON.parse(stringfiedList)

      parsedList.push(data)
      const newList = JSON.stringify(parsedList)
      localStorage.setItem('list', newList)
    } else {
      const parsedList = [data]
      const newList = JSON.stringify(parsedList)
      localStorage.setItem('list', newList)
    }
  }

  render() {
    const { data, showThumbs } = this.props;
    let icons;
    //showThumbs es una prop que viene de app, sólo se renderiza en la página de detalle por eso tiene false en app.
    if (showThumbs) {
      icons = <>
        <FontAwesomeIcon icon={faThumbsUp} className={`icon ${this.state.thumbsUp}`} onClick={() => this.handleClickUp()} />
        <FontAwesomeIcon icon={faThumbsDown} className={`icon i1 ${this.state.thumbsDown}`} onClick={() => this.handleClickDown()} />
      </>
    }
    return (
      <div className="hero-container"
        style={{
          backgroundImage: `linear-gradient(30deg, rgba(0, 0, 0, 0.884), rgba(170, 170, 170, 0.11)), url(${data.imgPortada})`
        }}>

        {/*usé la library "reactPlayer" para reproducir el trailer o un fragmento*/}

        {this.state.playVideo ?
          <ReactPlayer url={data.trailer} width='100%' height='100%' playing='true' />
          :
          <>
            <h3 className="subtitle">Original de COURFLIX</h3>
            <h1 className="serie-title">{data.title}</h1>
            <div className="infoWrapper">
              <span className="year">{data.year}</span>
              <span className="age">{data.age}</span>
              <span className="seasons">{data.seasons}</span>
              <span>{data.duration}</span>
            </div>
            <button className="button b1" onClick={() => this.handlePlay()} >
              <FontAwesomeIcon icon={faPlay} className="play" />Reproducir
            </button>
            <button className="button" onClick={() => this.handleList(data)} >
              <FontAwesomeIcon icon={faPlus} className="plus" />Mi lista
            </button>
            {icons}
            <p className="sinopsis">{data.description}</p>
          </>
        }
      </div>
    );
  }
}

export default Hero;
