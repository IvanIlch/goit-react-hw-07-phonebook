import React from "react";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/contacts/contactsAction";
import { getFilter } from "../../redux/contacts/contactsSelectors";

import styles from "./Filter.module.css";
import PropTypes from "prop-types";

function Filter({ value, searchContact }) {
  return (
    <label className={styles.label}>
      Find contact by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={value}
        placeholder="Пошук"
        onChange={(e) => searchContact(e.target.value)}
      ></input>
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  searchContact: PropTypes.func,
};
const mapStateToProps = (state) => ({
  value: getFilter(state),
});
const mapDispatchToProps = {
  searchContact: changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
