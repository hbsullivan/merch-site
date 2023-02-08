import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

export default function EditMerchForm(props) {
  const { item } = props;

  function handleEditItemFormSubmission(event) {
    event.preventDefault();
    props.onEditItem({
      name: event.target.name.value,
      quantity: parseInt(event.target.quantity.value),
      description: event.target.description.value,
      id: item.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleEditItemFormSubmission}
      buttonText="Update Ticket" />
    </React.Fragment>
  );
}

EditMerchForm.propTypes = {
  item: PropTypes.object,
  onEditItem: PropTypes.func
};