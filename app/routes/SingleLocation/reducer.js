import * as constants from '../Home/constants';

const initialState = {
  location: {}
};

export default function singleLocationReducer(state=initialState, action={}) {
  switch(action.type) {
    case constants.GET_LOCATION_SUCCESS:
      return  { ...state, location: action.location };
    default:
      return state;
  }
}
