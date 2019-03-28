import { connect } from "react-redux";
import OrderList from "../components/OrderList.jsx";
import deleteTableItem from "../actions/deleteTableItem.js";

const mapStateToProps = state => {
  return {
    selectedTable: state.selectedTable,
    toggledTables: state.toggledTables,
    items: state.tableData[state.selectedTable]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDelete: (tableId, id) => {
      dispatch(deleteTableItem(tableId, id));
    }
  }
}

const OrderListContainer = connect(mapStateToProps, mapDispatchToProps)(
  OrderList
);

export default OrderListContainer;