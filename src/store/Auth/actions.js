import {
  REQUEST_DATA_SUCCESS
} from './actionTypes';



const returnToDispatch = (dispatch, type, payload) => {
  dispatch({
    type: type,
    payload: payload,
  });
};


export const setUserData = (data) => {
  return dispatch => {

    returnToDispatch(dispatch, REQUEST_DATA_SUCCESS, data);
  };
};
