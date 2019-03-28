import { connect } from "react-redux";
import Menu from "../components/Menu.jsx";

const mapStateToProps = state => {
  return {
    selectedTable: state.selectedTable,
    toggledTables: state.toggledTables
  }
}

const MenuContainer = connect(mapStateToProps, null)(
  Menu
);

export default MenuContainer;