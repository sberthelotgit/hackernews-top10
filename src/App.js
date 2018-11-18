import React, { Component } from 'react';
import './App.css';
import Layout from './component/UI/Layout';
import Stories from './component/Stories/Stories';

class App extends Component {
  render() {
    return (
      <Layout title="Hackernews top 10 stories">
        <Stories />
      </Layout>
    );
  }
}

export default App;
