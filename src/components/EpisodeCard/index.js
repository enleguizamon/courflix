import React from 'react';
import './style.scss'

class Card extends React.Component {
    render() {
        const { episode } = this.props;
        return (
            <div className="episodeCardWrapper">
                <img className="serieImg" src={episode.serieImg} />
                <p className="serieTitle">{episode.serieTitle}</p>
                <p className="serieDescription">{episode.serieDescription}</p>
                <div className="bottom"></div>
            </div>
        );
    }
}

export default Card;