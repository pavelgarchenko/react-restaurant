import { connect } from "react-redux";
import ToggleTable from "../components/ToggleTable.jsx";
import toggleTable from "../actions/toggleTable.js";
import incrementEarnings from "../actions/incrementEarnings.js";


const mapStateToProps = state => {
  return {
    selectedTable: state.selectedTable,
    tableStatusData: state.tableStatusData,
    tableData: state.tableData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToggle: (id, tableData) => {
      var total = 0
      for( let i = 0; i < tableData[id].length; i ++) {
        total += tableData[id][i].price;
      }
      console.log("id: " + id)
      dispatch(toggleTable(id));
      dispatch(incrementEarnings(total));
    },
  };
};

const ToggleTableContainer = connect(mapStateToProps, mapDispatchToProps)(
  ToggleTable
);

export default ToggleTableContainer;