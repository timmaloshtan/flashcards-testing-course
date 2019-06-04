import React from 'react';
import { shallow } from 'enzyme';

import { Stack } from './Stack';
import { stack } from '../data/fixtures'

const props = { stack };
const emptyProps = { stack: {} };


describe('Stack component', () => {
  const stack = shallow(<Stack {...props} />);
  const emptyStack = shallow(<Stack {...emptyProps} />);


  it('should render the title', () => {
    expect(stack.find('h3').text()).toEqual(props.stack.title);
  });

  it('should render a link to home', () => {
    expect(stack.find('Link h4').text()).toEqual('Home');
  });
  
  it('should render the correct number of cards', () => {
    expect(stack.find('Card').length).toEqual(props.stack.cards.length);
  });

  it('should redirect if cards are undefined', () => {
    expect(emptyStack.find('Redirect').at(0).exists()).toBe(true);
  });
});
