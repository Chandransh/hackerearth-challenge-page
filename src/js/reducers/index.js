import {combineReducers} from 'redux';

import getUpcomingChallenges from './getUpcomingChallenges';

const rootReducer = combineReducers({
  getUpcomingChallenges
});

export default rootReducer;