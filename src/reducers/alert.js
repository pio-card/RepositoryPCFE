//8 - create reduder file - alert.js RA-4.1
import { SET_ALERT, REMOVE_ALERT } from "../actions/types"; //RA-4.4
//declare an array avariable to store initial state of the reducer
const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action; //deconstruct
  switch (type) {
    case SET_ALERT: //RA 4.4.2
      return [...state, payload];
    case REMOVE_ALERT: //RA 4.4.2
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
