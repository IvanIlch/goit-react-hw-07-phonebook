import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeContact } from "../../redux/contacts/contactsOperations";
import { getContactById } from "../../redux/contacts/contactsSelectors";

function ContactItem({ id, name, number, onDelete }) {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button type="button" id={id} onClick={() => onDelete(id)}></button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  const contact = getContactById(state, ownProps);
  return {
    ...contact,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () => {
    return dispatch(removeContact(ownProps.id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
