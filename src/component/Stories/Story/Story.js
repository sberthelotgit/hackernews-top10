import React, { Component } from 'react';
import Comment from '../../Comment/Comment';
import { extractTopCommentFromStory } from '../../../services/HNApiService';
import './Story.css';
class Story extends Component {
  state = {
    showDetails: false
  };

  render() {
    let comments = extractTopCommentFromStory(this.props.story);
    return (
      <div className="card">
        <div
          className="card-header"
          onClick={() =>
            this.setState({ showDetails: !this.state.showDetails })
          }
        >
          <h5 className="mb-0">{this.props.story.title}</h5>
        </div>
        {this.state.showDetails ? (
          <div className="card-body">
            <div className="row">
              <div className="col-lg-1">URL: </div>
              <div className="col-lg-11">
                <a href={this.props.story.url}>{this.props.story.url}</a>
              </div>
            </div>
            <div class="CommentHeader">Comments({comments.length})</div>
            {comments.length === 0
              ? 'No Comment'
              : comments.map(commentId => (
                  <Comment key={commentId} commentId={commentId} />
                ))}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Story;
