import React from "react";
import PropTypes from "prop-types";

export default function MerchDetail(props) {
  const { item, onClickingDelete} = props;
  return (
    <React.Fragment>
      <h1>Merch Details</h1>
      <h3>Item: {item.name}</h3>
      <h4>Quantity: {item.quantity}</h4>
      <p>Description: {item.description}</p>
      <hr />
      <button onClick={()=>onClickingDelete(item.id)}>Delete Item</button>
    </React.Fragment>
  );
}

MerchDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func
}

