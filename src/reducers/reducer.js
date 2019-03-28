import { combineReducers } from "redux";
import { 
  SELECT_TABLE, 
  TOGGLE_TABLE 
} from "../constants/constants";


const selectedTable = (state = null, action) => {
  switch (action.type) {
    case SELECT_TABLE:
      return (state === action.id) ? null : action.id;
    default:
      return state;
  }
};
const toggledTables = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_TABLE:
      if (state.includes(action.id)) {
        console.log("Removing Table: ", action.id)
        return state.filter(id => id !== action.id);
      } else {
        console.log("Adding Table: ", action.id)
        return [...state, action.id];
      }
    default:
      return state;
  }
};

const reducer = combineReducers({
  selectedTable,
  toggledTables,
});

export default reducer;