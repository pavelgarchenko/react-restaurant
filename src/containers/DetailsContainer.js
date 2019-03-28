import { connect } from "react-redux";
import Details from "../components/Details.jsx";

const mapStateToProps = state => {
  return {
    selectedTable: state.selectedTable,
    toggledTables: state.toggledTables
  }
}

const DetailsContainer = connect(mapStateToProps, null)(
  Details
);

export default DetailsContainer;