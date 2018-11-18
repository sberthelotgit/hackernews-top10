import React, { Component } from 'react';
import { withHNApiService } from '../../services/HNApiService';
import './Comment.css';

class Comment extends Component {
  state = {};

  componentDidMount() {
    this.props.hnApiService
      .getComment(this.props.commentId)
      .then(comment => this.setState({ comment }));
  }

  render() {
    return (
      <>
        {this.state.comment ? (
          <div className="card CommentCard">
            <div className="card-body">
              <h5 className="card-title">{this.state.comment.by}</h5>
              <div
                className="card-text"
                dangerouslySetInnerHTML={{ __html: this.state.comment.text }}
              />
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default withHNApiService(Comment);
