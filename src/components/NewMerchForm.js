import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

export default function NewMerchForm(props){

  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      name: event.target.name.value,
      quantity: parseInt(event.target.quantity.value),
      description: event.target.description.value,
      id: v4()
    });
  }

  return(
    <React.Fragment>
      <ReusableForm 
      formSubmissionHandler={handleNewMerchFormSubmission}
      buttonText="Add Item" />
    </React.Fragment>
  )
}

NewMerchForm.propTypes = {
  onNewItemCreation: PropTypes.func
};