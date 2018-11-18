import React, { Component } from 'react';
import { withHNApiService } from '../../services/HNApiService';
import Story from './Story/Story';

class Stories extends Component {
  state = {};

  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.hnApiService
      .getTopStories()
      .then(topStories =>
        this.setState({ stories: topStories, isLoading: false })
      );
  }
  render() {
    return (
      <>
        {this.state.stories
          ? this.state.stories.map(topStory => (
              <div className="my-1">
                <Story key={topStory.id} story={topStory} />
              </div>
            ))
          : null}
      </>
    );
  }
}

export default withHNApiService(Stories);
