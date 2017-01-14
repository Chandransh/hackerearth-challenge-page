import React, {Component} from 'react';

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

export default Home;