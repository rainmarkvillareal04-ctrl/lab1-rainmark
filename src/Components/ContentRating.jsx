
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: 0,
      dislike: 0,
    };
  }

  handleLike = () => {
    this.setState((prevState) => ({
      like: prevState.like + 1,
    }));
  };

  handleDislike = () => {
    this.setState((prevState) => ({
      dislike: prevState.dislike + 1,
    }));
  };

  render() {
    const { like, dislike } = this.state;

    return (
      <div className="content-rating">
        <h1>Text Content Rating</h1>
        <p>
          “Your life does not get better by chance, it gets better by change.”
        </p>
        <div className="rating-button">
          <button className="like-button" onClick={this.handleLike}>
            Like ({like})
          </button>
          <button className="dislike-button" onClick={this.handleDislike}>
            Dislike ({dislike})
          </button>
        </div>
      </div>
    );
  }
}

export default ContentRating;
