import { connect } from "react-redux";
import MenuItem from "../components/menu/MenuItem/MenuItem.jsx";
import addTableItem from "../actions/addTableItem.js";


const mapStateToProps = state => {
  return {
    selectedTable: state.selectedTable,
    tableStatusData: state.tableStatusData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (name, price, id) => {
      dispatch(addTableItem(name, price, id));
    }
  }
}

const MenuItemContainer = connect(mapStateToProps, mapDispatchToProps)(
  MenuItem
);

export default MenuItemContainer;