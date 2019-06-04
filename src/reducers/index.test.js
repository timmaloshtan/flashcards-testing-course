import rootReducer from './index';
import * as actions from '../actions';
import { stack, stacks } from '../data/fixtures';

describe('Root reducer', () => {
  it('should return the initial state', () => {
    expect(rootReducer({}, {})).toEqual({
      stack: {},
      stacks: [],
    });
  });

  it('should set the main stack', () => {
    expect(rootReducer({}, actions.setStack(stack))).toEqual({
      stack,
      stacks: [],
    });
  });

  it('should load stacks', () => {
    expect(rootReducer({}, actions.loadStacks(stacks))).toEqual({
      stack: {},
      stacks,
    });
  });
  
  it('should add a stack', () => {
    expect(rootReducer({}, actions.addStack(stack))).toEqual({
      stack: {},
      stacks: [stack],
    });
  });
});
