import React, { Component } from 'react';
import Comment from './Comment';
import { extractTopCommentFromStory } from '../../services/HNApiService';

class Story extends Component {
  state = {
    showDetails: false
  };

  render() {
    let comments = extractTopCommentFromStory(this.props.story);
    if (comments.length === 0) {
      comments = 'No Comment';
    } else {
      comments = comments.map(commentId => (
        <Comment key={commentId} commentId={commentId} />
      ));
    }
    return (
      <div className="card">
        <div
          className="card-header"
          id="headingOne"
          onClick={() =>
            this.setState({ showDetails: !this.state.showDetails })
          }
        >
          <h5 className="mb-0">{this.props.story.title}</h5>
        </div>
        {this.state.showDetails ? (
          <div className="collapse show">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-1">URL: </div>
                <div className="col-lg-11">
                  <a href={this.props.story.url}>{this.props.story.url}</a>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: 'light-grey',
                  width: '100%',
                  padding: '1rem'
                }}
              >
                {comments}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Story;
