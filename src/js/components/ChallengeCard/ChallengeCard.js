/**
 * Created by chandransh on 14/1/17.
 */
'use strict';
import React, {Component} from 'react';

import './ChallengeCard.css';

const ChallengeCard = ({thumbnail, title, url, challengeType, startTimestamp}) => (
  <div className="challenge-card">
    <a href={url}></a>
    <div className="thumbnail full-width float-left">
      <img className="full-width float-left"
           src={thumbnail} alt={title}/>
    </div>
    <div className="card-content">
      {(challengeType.toLowerCase()==="monthly challenges") ?
        <p className="challenge-type" style={{backgroundColor:"#aeff5a"}}>&#9873; Monthly Challenge</p>
        : <p className="challenge-type">&#9968; Hiring Challenge</p>}
      <h3 className="title text-ellipsis"
          title={title}>{title}</h3>
      <p className="text-secondary text-uppercase">
        <small>Starts on</small>
      </p>
      <p>{startTimestamp}</p>
      <a href={url} className="btn btn-outline full-width">View Details</a>
    </div>
  </div>
);

ChallengeCard.propTypes = {
  thumbnail: React.PropTypes.string
};

export default ChallengeCard;