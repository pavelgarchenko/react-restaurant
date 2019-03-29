import { combineReducers } from "redux";
import { 
  NUMBER_OF_TABLES,
  ADD_TABLE_ITEM,
  DELETE_TABLE_ITEM,
  SELECT_TABLE, 
  TOGGLE_TABLE,
  INCREMENT_EARNINGS,
} from "../constants/constants";


var initTableData = []

for (let i = 0; i < NUMBER_OF_TABLES; i ++) {
  initTableData.push([]);
}

var initTableStatusData = Array(NUMBER_OF_TABLES).fill(false);

const tableData = (state = initTableData, action) => {
  switch (action.type) {
    case ADD_TABLE_ITEM:
      var newState = []
      for (let i = 0; i < NUMBER_OF_TABLES; i ++) {
        newState.push(state[i].slice());
      }
      newState[action.tableId].push(action.item)
      return newState;
    case DELETE_TABLE_ITEM:
      var newState = []
      for (let i = 0; i < NUMBER_OF_TABLES; i ++) {
        newState.push(state[i].slice());
      }
      newState[action.tableId].splice(action.id, 1)
      return newState;
    case TOGGLE_TABLE: // Check in button click -> remove all orderItems for table ID
      var newState = []
      for (let i = 0; i < NUMBER_OF_TABLES; i ++) {
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

const tableStatusData = (state = initTableStatusData, action) => {
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