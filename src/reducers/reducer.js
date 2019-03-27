import { combineReducers } from "redux";
import { SELECT_TABLE } from "../constants/constants";


const selectedTable = (state = null, action) => {
  switch (action.type) {
    case SELECT_TABLE:
      return (state === action.id) ? null : action.id;
    default:
      return state;
  }
};

const reducer = combineReducers({
  selectedTable
});

export default reducer;