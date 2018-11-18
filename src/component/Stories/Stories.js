import React, { Component } from 'react';
import { withHNApiService } from '../../services/HNApiService';

class Stories extends Component {
  state = {};

  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.hnApiService
      .fetchTopStorie()
      .then(topStories =>
        this.setState({ stories: topStories, isLoading: false })
      );
  }
  render() {
    return (
      <>
        <ul>
          {this.state.stories
            ? this.state.stories.map(topStory => (
                <li key={topStory.id}> {topStory.title} </li>
              ))
            : null}
        </ul>
      </>
    );
  }
}

export default withHNApiService(Stories);
