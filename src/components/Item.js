import React from "react";
import PropTypes from "prop-types";

export default function Item(props) {
  return(
    <React.Fragment>
      <div onClick = {()=>props.whenItemClicked(props.id)}>
      <h3>Item: {props.name}</h3>
      <h4>Quantity: {props.quantity}</h4>
      <p>Description: {props.description}</p>
      <hr />
      </div>
    </React.Fragment>
  ); 
}

Item.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
}