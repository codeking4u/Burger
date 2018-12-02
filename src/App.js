import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Burgersetup from './containers/Burgersetup/Burgersetup';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
            <Burgersetup  />
        </Layout>
      </div>
    );
  }
}

export default App;
