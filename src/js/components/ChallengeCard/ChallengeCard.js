/**
 * Created by chandransh on 14/1/17.
 */
'use strict';
import React, {Component} from 'react';

import './ChallengeCard.css';

const ChallengeCard = ({thumbnail, title, url, challengeType, startTimestamp}) => (
  <div className="challenge-card">
    <div className="thumbnail full-width float-left">
      <img className="full-width float-left"
           src="https://hackerearth-media.global.ssl.fastly.net/media/hackathon/flockathon/images/f718e452-b-c66888de-9-listing%20%281%29.png" alt="title"/>
    </div>
    <p className="challenge-type">
      <span>&#9968; </span>Hackathon
    </p>
    <a href="/">
      {/*<h4>{(ngoName.length>25) ? ngoName.substring(0,25)+'...' : ngoName}</h4>*/}
    </a>
    <h3 className="title text-ellipsis"
        title="title">Battle Of Bots #8Battle Of Bots #8</h3>
    <p className="text-secondary text-uppercase">
      <small>Starts on</small>
    </p>
    <p>Jan 14, 11 AM IST</p>
    <a href="#" className="btn btn-outline">View Details</a>
  </div>
);

ChallengeCard.propTypes = {
  thumbnail: React.PropTypes.string
};

export default ChallengeCard;