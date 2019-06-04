import React from 'react';
import { shallow } from 'enzyme';

import { StackList } from './StackList';
import { stacks } from '../data/fixtures';
import stacksData from '../data/stacks.json'

const loadStacks = jest.fn();
const emptyLoadStacks = jest.fn();
const props = { stacks, loadStacks };
const emptyProps = { stacks: [], loadStacks: emptyLoadStacks };

describe('StackList component', () => {
  const stackList = shallow(<StackList {...props} />);
  const emptyStackList = shallow(<StackList {...emptyProps} />);

  it('should render stack links with proper titles', () => {
    stackList.find('Link h4').forEach(
      (title, i) => expect(title.text()).toEqual(props.stacks[i].title)
    );
  });

  it('should render the correct number of links', () => {
    expect(stackList.find('Link').length).toEqual(props.stacks.length);
  });
  
  describe('when mounting', () => {
    it('should not call loadStacks prop if there are any stacks', () => {
      expect(loadStacks.mock.calls.length).toBe(0);
    });
    
    it('should call loadStacks prop once with stacksData as argument', () => {
      expect(emptyLoadStacks.mock.calls.length).toBe(1);
      expect(emptyLoadStacks.mock.calls[0][0]).toEqual(stacksData);
    });
    
  });
});
