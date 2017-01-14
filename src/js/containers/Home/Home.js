/**
 * Created by chandransh on 21/12/16.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import './Home.css';
import Header from '../../components/Header/Header';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        {this.props.children}
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
)(Home);