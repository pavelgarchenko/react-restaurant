import { connect } from "react-redux";
import Header from "../components/header/index";


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