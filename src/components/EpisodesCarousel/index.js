import React from 'react';
import './style.scss';
import EpisodeCard from '../EpisodeCard'
import Slider from 'react-slick';

class EpisodesCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.settings = {
      infinite: true,
      speed: 1000,
      arrows: true,
      adaptiveHeight: true,
      variableWidth: true,
      slidesToShow: 4,
      slidesToScroll: 1,
    }
  }

  render() {
    const { episodes } = this.props;
    return (
      <div className="episodesWrapper">
          <p className="episodesTitle">Ve la temporada 1</p>
        <Slider {...this.settings} className="episodesSlick">
          {episodes.map((episode, key) => {
              return (
                <EpisodeCard key={key} episode={episode} />
              )
          })}
        </Slider>
      </div>
    );
  }
}

export default EpisodesCarousel;