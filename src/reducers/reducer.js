import { combineReducers } from "redux";
import { 
  ADD_TABLE_ITEM,
  DELETE_TABLE_ITEM,
  SELECT_TABLE, 
  TOGGLE_TABLE 
} from "../constants/constants";


var initialTableData = []

for (let i = 0; i < 16; i ++) {
  initialTableData.push([]);
}

const tableData = (state = initialTableData, action) => {
  switch (action.type) {
    case ADD_TABLE_ITEM:
      var newState = []
      for (let i = 0; i < 16; i ++) {
        newState.push(state[i].slice());
      }
      newState[action.tableId].push(action.item)
      return newState;
    case DELETE_TABLE_ITEM:
      var newState = []
      for (let i = 0; i < 16; i ++) {
        newState.push(state[i].slice());
      }
      newState[action.tableId].splice(action.id, 1)
      return newState;
    // case TOGGLE_TABLE:
    //   var newState = []
    //   for (let i = 0; i < 16; i ++) {
    //     newState.push(state[i].slice());
    //   }
    //   newState[action.id] = []
    //   return newState
    default:
      return state;
  }
};

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
        return state.filter(id => id !== action.id);
      } else {
        return [...state, action.id];
      }
    default:
      return state;
  }
};

const reducer = combineReducers({
  tableData,
  selectedTable,
  toggledTables,
});

export default reducer;