import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Card from './Card'

const mapStateToProps = ({ stack }) => ({
  stack,
});

class Stack extends Component {
  render() {
    const { stack } = this.props;
    const {
      title,
      cards,
    } = stack;

    if (cards === undefined) {
      return (
        <Redirect to="/" />
      );
    }
    return (
      <div>
        <Link to="/" className="link-home">
          <h4>
            Home
          </h4>
        </Link>
        <h3>{title}</h3>
        <br />
        {
          cards.map(card => (
            <Card key={card.id} card={card} />
          ))
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Stack);