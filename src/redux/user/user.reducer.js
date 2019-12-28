import { UserActionTypes } from "./user.types";

// all reducers will have a initial state
const INITIAL_STATE = {
  currentUser: null
};

// reducer is nothing but a function which takes state & action as a parameter
// if there is no state, then state will be equal to initial state
// it will receive all the actions & acc. to the type, do the needful
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state, // spreading the current state
        currentUser: action.payload // updating the current state with the required changes (payloads)
      };
    default:
      return state;
  }
};

export default userReducer;
