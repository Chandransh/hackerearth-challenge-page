/**
 * Created by chandransh on 14/1/17.
 */
'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import './ChallengePage.css';
import ChallengeCard from '../../components/ChallengeCard/ChallengeCard';

class ChallengePage extends Component {
  render() {
    return (
      <div className="full-grid">
        <h1>Upcoming Challenges</h1>
        <ChallengeCard/>
        <ChallengeCard/>
        <ChallengeCard/>
        <ChallengeCard/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapActionToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(ChallengePage);