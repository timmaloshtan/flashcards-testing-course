import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reveal: false
    };
  }
  render() {
    const { card: { prompt, answer } } = this.props;
    const { reveal } = this.state;
    return (
      <div
        className="card"
        onClick={
          () => this.setState({ reveal: true })
        }
      >
        <div className="card-prompt">
          <h4>{prompt}</h4>
        </div>
        <div className="card-answer">
          <h4 className={reveal ? 'text-revealed' : 'text-hidden'}>
            {answer}
          </h4>
        </div>
      </div>
    )
  }
}
