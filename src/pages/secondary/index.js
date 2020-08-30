import React from 'react';
import '../../assets/reset.css'
import './style.scss'
import Hero from '../../components/Hero'
import InnerCarousel from '../../components/InnerCarousel';
import data from '../../data/courflixData.json'
import EpisodesCarousel from '../../components/EpisodesCarousel';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

class Secondary extends React.Component {
  render() {
    const id = this.props.match.params.id;
    if (data[id].type == "pelis") {
      return (
        <div>
          <Link to="/">
            <img className="logoCourflix" src="https://fontmeme.com/permalink/200718/179c0a6e7157b4da01ae6c279a5001c6.png" alt="netflix-font" border="0" />
          </Link>
          <Hero data={data[id]} showThumbs={true} />
          <p className="watchMovies">Más películas para vos</p>
          <InnerCarousel data={data} filter={"pelis"} />
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/">
            <img className="logoCourflix" src="https://fontmeme.com/permalink/200718/179c0a6e7157b4da01ae6c279a5001c6.png" alt="netflix-font" border="0" />
          </Link>
          <Hero data={data[id]} showThumbs={true} />
          <EpisodesCarousel episodes={data[id].episodes} />
          <Footer />
        </div>
      )
    }

  }
}

export default Secondary;