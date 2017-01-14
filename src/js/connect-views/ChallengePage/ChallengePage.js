/**
 * Created by chandransh on 14/1/17.
 */
'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import './ChallengePage.css';
import fetch from 'isomorphic-fetch';
import Loader from '../../components/Loader/Loader';
import * as GetUpcomingChallenges from '../../reducers/getUpcomingChallenges';
import ChallengeCard from '../../components/ChallengeCard/ChallengeCard';

class ChallengePage extends Component {
  componentDidMount() {
    fetch('https://www.hackerearth.com/api/events/upcoming')
      .then((responseObj) => {
        let headerContentType = responseObj.headers.get('content-type');
        if (headerContentType !== null && headerContentType.indexOf('application/json') >= 0) {
          return responseObj.json();
        }
      })
      .then((response) => {
        return this.props.GetUpcomingChallenges.loadSuccess(response);
      })
      .catch((error) => {
        return this.props.GetUpcomingChallenges.loadFailure(error);
      });
  };

  render() {
    const {getUpcomingChallenges} = this.props;

    if (getUpcomingChallenges.loaded == false) return <Loader/>;

    let challengeCardItems = getUpcomingChallenges.data.map((item,i)=>{
      return <ChallengeCard key={i}
                            thumbnail={item.thumbnail}
                            title={item.title}
                            url={item.url}
                            challengeType={item.challenge_type}
                            startTimestamp={item.start_timestamp}/>
    });

    return (
      <div className="full-grid">
        <h1>Upcoming Challenges</h1>
        {challengeCardItems}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getUpcomingChallenges: state.getUpcomingChallenges
});

const mapActionToProps = (dispatch) => ({
  GetUpcomingChallenges: bindActionCreators(GetUpcomingChallenges, dispatch)
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(ChallengePage);