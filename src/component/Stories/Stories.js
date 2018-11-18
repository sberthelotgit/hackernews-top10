import React, { Component } from 'react';
import { withHNApiService } from '../../services/HNApiService';
import Story from './Story';

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
        <div className="accordion" id="accordionExample">
          {this.state.stories
            ? this.state.stories.map(topStory => (
                <Story key={topStory.id} story={topStory} />
              ))
            : null}
        </div>
      </>
    );
  }
}

export default withHNApiService(Stories);
