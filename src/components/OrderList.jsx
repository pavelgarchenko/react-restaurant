import React from "react";


const OrderList = props => {
  if (props.selectedTable === null) return null;
  
  var orderTotal = 0
  var orderList = props.items.map((item, i) => {
    orderTotal += item.price
    return (
      <div key={i} className="order-item">
        <button onClick={() => props.onDelete(props.selectedTable, i)}>
          x
        </button>
        <span className="name">{item.name}</span>
        <span className="amount">${item.price}</span>
      </div>
    )
  })


  if (props.checkedIn) {
    return (
      <div>
        <h3 className="bill-total">Bill Total: <span className="amount"> ${orderTotal}</span></h3>
        <h4>Orders:</h4>
        {orderList}
      </div>
    );
  }
  else return false;
};

export default OrderList;
