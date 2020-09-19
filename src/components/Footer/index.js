import React from 'react';
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">Made with <FontAwesomeIcon icon={faHeart} color={"#A52A2A"} /> by Eli</div>
        );
    }
}

export default Footer;