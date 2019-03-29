import { combineReducers } from "redux";
import { 
  ADD_TABLE_ITEM,
  DELETE_TABLE_ITEM,
  SELECT_TABLE, 
  TOGGLE_TABLE,
  INCREMENT_EARNINGS,
} from "../constants/constants";


var initialTableData = []

for (let i = 0; i < 16; i ++) {
  initialTableData.push([]);
}

var initialTableStatusData = Array(16).fill(false);

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
    case TOGGLE_TABLE: // Check in button click -> remove all orderItems for table ID
      var newState = []
      for (let i = 0; i < 16; i ++) {
        newState.push(state[i].slice());
      }
      newState[action.id] = [];
      return newState;
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

const tableStatusData = (state = initialTableStatusData, action) => {
  switch (action.type) {
    case TOGGLE_TABLE:
      var newState = state.slice();
      newState[action.id] = !newState[action.id]
      return newState;
    default:
      return state;
  }
};

const moneyEarned = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_EARNINGS:
      return state + action.amount;
    default:
      return state;
  }
}

const reducer = combineReducers({
  tableData,
  selectedTable,
  tableStatusData,
  moneyEarned,
});

export default reducer;