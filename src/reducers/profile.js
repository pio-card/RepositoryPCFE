//two: import types
import { GET_PROFILE, PROFILE_ERROR } from "../actions/types";

//define intial state
const initialState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action; //destruct
  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };

    default:
      return state;
  }
}
