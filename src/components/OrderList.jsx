import React from "react";

const OrderList = props => {
  if (props.selectedTable === null) return null;
  var style = {
  }
  return (
    <div>
      { 
        props.items.map((item, i) => {
          return (
            <div key={i} className="order-item">
              <button onClick={() => props.onDelete(props.selectedTable, i)}>
                x
              </button>
              <span className="name">{item.name}</span>
              <span className="price">${item.price}</span>
              
            </div>
            )
          })
      }
    </div>
  );
};

export default OrderList;
