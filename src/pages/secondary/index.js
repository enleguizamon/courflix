import React from 'react';
import '../../assets/reset.css'
import './style.scss'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import InnerCarousel from '../../components/InnerCarousel';
import data from '../../data/courflixData.json'
import EpisodesCarousel from '../../components/EpisodesCarousel';
import Footer from '../../components/Footer';

class Secondary extends React.Component {
  render() {
    const id = this.props.match.params.id;
    if (data[id].type == "pelis") {
      return (
        <div>
          <Navbar />
          <Hero data={data[id]} showThumbs={true} />
          <p className="watchMovies">Más películas para vos</p>
          <InnerCarousel data={data} filter={"pelis"} />
          <Footer />
        </div>
      ); 
    } else {
      return (
        <div>
        <Navbar />
        <Hero data={data[id]} showThumbs={true}/>
        <EpisodesCarousel episodes={data[id].episodes} />
        <Footer />
      </div>
      )
    }

  }
}

export default Secondary;