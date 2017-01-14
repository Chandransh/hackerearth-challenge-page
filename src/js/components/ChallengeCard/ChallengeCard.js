/**
 * Created by chandransh on 14/1/17.
 */
'use strict';
import React, {Component} from 'react';

import './ChallengeCard.css';
import icons from '../../../resources/images/icons.png';

const ChallengeCard = ({thumbnail, title, url, challengeType, startTimestamp}) => (
  <div className="challenge-card text-center">
    <div className="thumbnail full-width float-left">
      <a href={url}>
        <img className="full-width float-left"
             src={thumbnail} alt={title}/>
      </a>
    </div>
    <div className="card-content">
      {(challengeType.toLowerCase()==="monthly challenges") ?
        <p className="challenge-type" style={{backgroundColor:"#aeff5a"}}>
          <i style={{backgroundImage:"url('"+icons+"')"}}></i>Monthly Challenge
        </p>
        :
        <p className="challenge-type">
          <i style={{backgroundImage:"url('"+icons+"')", backgroundPosition: "0px"}}></i>Hiring Challenge
        </p>
      }
      <h3 className="title text-ellipsis" title={title}>
        <a href={url}>{title}</a>
      </h3>
      <p className="text-secondary text-uppercase">
        <small>Starts on</small>
      </p>
      <p>{startTimestamp}</p>
      <a href={url} className="btn btn-outline full-width">View Details</a>
    </div>
  </div>
);

ChallengeCard.propTypes = {
  thumbnail: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  challengeType: React.PropTypes.string.isRequired,
  startTimestamp: React.PropTypes.string.isRequired
};

export default ChallengeCard;