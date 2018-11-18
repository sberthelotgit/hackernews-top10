import React, { Component } from 'react';
import { withHNApiService } from '../../services/HNApiService';

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
          <div className="card" style={{ backgroundColor: 'rgba(0,0,0,.03)' }}>
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
