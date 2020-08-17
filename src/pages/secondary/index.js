import React from 'react';
import '../../assets/reset.css'
import './style.scss'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import InnerCarousel from '../../components/InnerCarousel';
import data from '../../data/courflixData.json'

class Secondary extends React.Component {
  render() {
    const id = this.props.match.params.id;
    if (data[id].type == "pelis") {
      return (
        <div>
          <Navbar />
          <Hero data={data[id]} />
          <InnerCarousel data={data} filter={"pelis"} />
        </div>
      ); 
    } else {
      return (
        <div>
        <Navbar />
        <Hero data={data[id]} />
      </div>
      )
    }

  }
}

export default Secondary;