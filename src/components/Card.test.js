import React from 'react';
import { mount } from 'enzyme';

import Card from './Card';
import { stack } from '../data/fixtures';

const props = {
  card: stack.cards[0],
};

describe('Card component', () => {
  const card = mount(<Card {...props} />);

  it('should set "reveal" to be "false"', () => {
    expect(card.state().reveal).toBe(false);
  });

  it('should render card prompt', () => {
    expect(card.find('.card-prompt h4').text()).toEqual(props.card.prompt);
  });
  
  it('should render card answer', () => {
    expect(card.find('.card-answer h4').text()).toEqual(props.card.answer);
  });

  it('should apply "text-hidden" class to card answer', () => {
    expect(card.find('.card-answer h4').hasClass('text-hidden')).toBe(true);
  });
    
  describe('and clicking the card', () => {
    beforeEach(() => {
      card.find('div').first().simulate('click');
    });

    afterEach(() => {
      card.setState({ reveal: false });
    });

    it('should update "reveal" to be "true"', () => {
      expect(card.state().reveal).toBe(true);
    })
    
    it('should apply "text-revealed" class to card answer', () => {
      expect(card.find('.card-answer h4').hasClass('text-revealed')).toBe(true);
    });
  });
});
