import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Home from './containers/Home/Home';
import ChallengePage from './connect-views/ChallengePage/ChallengePage';
import NotFoundView from './static-views/NotFoundView/NotFoundView';

export default (
  <Route path="/" component={Home}>
    <IndexRoute component={ChallengePage}/>
    <Route path="*" component={NotFoundView}/>
  </Route>
);