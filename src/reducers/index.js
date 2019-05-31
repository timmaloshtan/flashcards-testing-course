import { SET_STACK } from '../actions'

const stack = (state = {}, action) => {
  switch (action.type) {
    case SET_STACK:
      return action.stack;
    default:
      return state;
  }
};

export default stack;