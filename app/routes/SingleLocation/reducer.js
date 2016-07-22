import * as constants from '../Home/constants';

const initialState = {
  location: {
    location: {},
    user: {}
  }
};

export default function singleLocationReducer(state=initialState, action={}) {
  switch(action.type) {
    case constants.GET_LOCATION_SUCCESS:
      return console.log('reducer...'), { ...state, location: action.location };
    default:
      return state;
  }
}
