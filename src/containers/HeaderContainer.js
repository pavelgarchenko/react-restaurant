import { connect } from "react-redux";
import Header from "../components/Header.jsx";


const mapStateToProps = state => {
  return {
    moneyEarned: state.moneyEarned,
    tableStatusData: state.tableStatusData
  }
}

const HeaderContainer = connect(mapStateToProps, null)(
  Header
)

export default HeaderContainer;