import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import stacksData from '../data/stacks.json';
import { setStack, loadStacks } from '../actions'

export class StackList extends Component {
  componentDidMount() {
    const { loadStacks, stacks } = this.props;
    if (stacks.length) {
      return;
    }
    loadStacks(stacksData);
  }

  render() {
    const { setStack, stacks } = this.props;
    return (
      <div className="stack-list">
        {
          stacks.map(stack => (
            <Link
              key={stack.id}
              to={`/stack`}
              onClick={() => setStack(stack)}
            >
              <h4>{stack.title}</h4>
            </Link>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = ({ stacks }) => ({
  stacks,
});

export default connect(
  mapStateToProps,
  {
    setStack,
    loadStacks,
  },
)(StackList);