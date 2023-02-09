import React from "react";
import PropTypes from "prop-types";

export default function MerchDetail(props) {
  const { item, onClickingDelete, editClick, buy} = props;
  return (
    <React.Fragment>
      <h1>Merch Details</h1>
      <h3>Item: {item.name}</h3>
      <h4>Quantity: {item.quantity}</h4>
      <p>Description: {item.description}</p>
      <button onClick={()=>onClickingDelete(item.id)}>Delete Item</button>
      <button onClick={()=>editClick(item.id)}>Edit Item</button>
      <button onClick={()=>buy(item)}>Buy Item </button>
      <hr />
    </React.Fragment>
  );
}

MerchDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  editClick: PropTypes.func, 
  buy: PropTypes.func
}

