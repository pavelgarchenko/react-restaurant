import { connect } from "react-redux";
import ToggleTableButton from "../components/ToggleTableButton.jsx";
import toggleTable from "../actions/toggleTable.js";

const mapStateToProps = state => {
  return {
    selectedTable: state.selectedTable,
    toggledTables: state.toggledTables
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToggle: id => {
      dispatch(toggleTable(id));
    }
  };
};

const ToggleTableButtonContainer = connect(mapStateToProps, mapDispatchToProps)(
  ToggleTableButton
);

export default ToggleTableButtonContainer;