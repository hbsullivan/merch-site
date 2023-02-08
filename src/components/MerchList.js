import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

export default function MerchList(props){
  return(
    <React.Fragment>
      <hr />
      {props.merchList.map((item) =>
        <Item 
        whenItemClicked = {props.onItemSelection}
        name={item.name}
        quantity={item.quantity}
        description={item.description} 
        id={item.id}
        key={item.id}/>
      )}
      
    </React.Fragment>
  );
}

MerchList.propTypes = {
  merchList: PropTypes.array,
  onItemSelection: PropTypes.func
}