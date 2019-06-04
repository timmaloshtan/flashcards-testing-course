import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Card from './Card'

const mapStateToProps = ({ stack }) => ({
  stack,
});

export const Stack = ({ stack: { title, cards } }) => cards === undefined
  ? (<Redirect to="/" />)
  : (
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

export default connect(
  mapStateToProps,
)(Stack);