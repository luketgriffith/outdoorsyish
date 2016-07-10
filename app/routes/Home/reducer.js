import * as constants from './constants';

const initialState = {
  signup: {
    email: '',
    password: ''
  },
  login: {
    email: '',
    password: ''
  }
};

export default function leasesReducer(state=initialState, action={}) {
  switch(action.type) {
    case constants.EMAIL_INPUT:
      return { ...state, signup: { ...state.signup, email: action.payload }};
    case constants.PW_INPUT:
      return { ...state, signup: { ...state.signup, password: action.payload }};  
    case constants.LOGIN_EMAIL_INPUT:
      return { ...state, login: { ...state.login, email: action.payload }};
    case constants.LOGIN_PW_INPUT:
      return { ...state, login: { ...state.login, password: action.payload }};    
    default:
      return state;
  }
}