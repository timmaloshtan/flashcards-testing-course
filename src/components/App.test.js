import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  const app = shallow(<App />);

  it('should render "Flashcard Pro" title', () => {
    expect(app.find('h2').text()).toEqual('Flashcard Pro');
  });

  it('should render a StackList', () => {
    expect(app.find('Connect(StackList)').exists()).toBe(true);
  });

  it('should render a link to create new stacks', () => {
    expect(app.find('Link h4').text()).toEqual('Create a New Stack')
  })
});

