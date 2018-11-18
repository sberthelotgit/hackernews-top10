import React, { Component } from 'react';
import { defaultTopCommentSize } from '../../constants';
import Comment from './Comment';

class Story extends Component {
  state = {
    show: false
  };

  render() {
    return (
      <div className="card">
        <div
          className="card-header"
          id="headingOne"
          onClick={() => this.setState({ show: !this.state.show })}
        >
          <h5 className="mb-0">{this.props.story.title}</h5>
        </div>
        {this.state.show ? (
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
                {this.props.story.kids
                  ? this.props.story.kids
                      .slice(0, defaultTopCommentSize)
                      .map(commentId => (
                        <Comment key={commentId} commentId={commentId} />
                      ))
                  : 'No Comments'}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Story;
