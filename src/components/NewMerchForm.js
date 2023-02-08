import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

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
      <form onSubmit={handleNewMerchFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='number'
          name='quantity'
          placeholder='Quantity' />
        <textarea
          name='description'
          placeholder='Description of Item' />
        <button type='submit'>Add</button>
      </form>
    </React.Fragment>
  )
}

NewMerchForm.propTypes = {
  onNewItemCreation: PropTypes.func
};