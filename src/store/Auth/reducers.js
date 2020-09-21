import {
  
  REQUEST_DATA_SUCCESS


} from './actionTypes';
const initialState = {
  loading: false,
  userData: [],
  
};

export default (state = initialState, action) => {
  switch (action.type) {
   
     
    case REQUEST_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
      };
    default:
      return state;
  }
};
