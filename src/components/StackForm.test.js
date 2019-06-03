import React from 'react';
import { shallow } from 'enzyme';

import { StackForm } from './StackForm';

const CHANGE_TITLE = 'CHANGE TITLE';
const CHANGE_PROMPT = 'CHANGE PROMPT';
const CHANGE_ANSWER = 'CHANGE ANSWER';


describe('StackForm component', () => {
  const stackForm = shallow(<StackForm />);

  it('should render the form title', () => {
    expect(stackForm.find('h4').at(1).text()).toEqual('Create a New Stack');
  });

  it('should render a link home', () => {
    expect(stackForm.find('h4').first().text()).toEqual('Home');
  });
  
  it('should render a Form component', () => {
    expect(stackForm.find('Form').exists()).toBe(true);
  });
  
  it('should render a button to add a new card', () => {
    expect(stackForm.find('Button').at(0).props().children).toEqual('Add Card');
  });
  
  it('should render a button to submit the form', () => {
    expect(stackForm.find('Button').at(1).props().children).toEqual('Save the Stack')
  });

  describe('when updating the title', () => {
    beforeEach(() => {
      stackForm.find('FormControl').simulate('change', { target: { value: CHANGE_TITLE } });
    });

    it('should update the title in state', () => {
      expect(stackForm.state().title).toEqual(CHANGE_TITLE);
    });
  });

  describe('when adding a new card', () => {
    beforeEach(() => {
      stackForm.find('Button').at(0).simulate('click');
    });

    afterEach(() => {
      stackForm.setState({ cards: [] });
    });

    it('should add a new card to the state', () => {
      expect(stackForm.state().cards.length).toEqual(1);
    });

    it('should render the prompt section', () => {
      expect(stackForm.find('FormLabel').at(1).props().children).toEqual('Prompt:');
    });
    
    it('should render the answer section', () => {
      expect(stackForm.find('FormLabel').at(2).props().children).toEqual('Answer:');
    });

    describe('and updating the card prompt', () => {
      beforeEach(() => {
        stackForm.find('FormControl').at(1)
          .simulate('change', { target: { value: CHANGE_PROMPT } });
      });

      it('should update the prompt in the state', () => {
        expect(stackForm.state().cards[0].prompt).toEqual(CHANGE_PROMPT);
      })
    });

    describe('and updating the card answer', () => {
      beforeEach(() => {
        stackForm.find('FormControl').at(2)
          .simulate('change', { target: { value: CHANGE_ANSWER } });
      });

      it('should update the answer in the state', () => {
        expect(stackForm.state().cards[0].answer).toEqual(CHANGE_ANSWER);
      });
    });
  });
  
});