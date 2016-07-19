import * as constants from './constants';

const initialState = {
  userData: {}
};

export default function authReducer(state=initialState, action={}) {
  switch(action.type) {
    case constants.SET_USER:
      return { ...state, userData: action.profile };
    case constants.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
