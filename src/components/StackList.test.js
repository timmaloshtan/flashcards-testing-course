import React from 'react';
import { shallow } from 'enzyme';

import { StackList } from './StackList';
import { stacks } from '../data/fixtures';

const props = { stacks };

describe('StackList component', () => {
  const stackList = shallow(<StackList {...props} />);

  it('should render stack links with proper titles', () => {
    stackList.find('Link h4').forEach(
      (title, i) => expect(title.text()).toEqual(props.stacks[i].title)
    );
  });

  it('should render the correct number of links', () => {
    expect(stackList.find('Link').length).toEqual(props.stacks.length);
  });
  
});
