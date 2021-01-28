import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ContactItem from "../contactItem/ContactItem";
import {
  getvisibleContacts,
  getLoading,
} from "../../redux/contacts/contactsSelectors";
import styles from "./ContactList.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spiner from "../spiner/Spiner";

function ContactList({ visibleContacts, isLoading }) {
  return (
    <>
      <TransitionGroup component="ul" className={styles.contacts}>
        {visibleContacts.map((contact) => (
          <CSSTransition key={contact.id} classNames={styles} timeout={250}>
            <ContactItem
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      {isLoading && <Spiner />}
    </>
  );
}
ContactList.propTypes = {
  visibleContact: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    })
  ),
};
const mapStateToProps = (state) => ({
  visibleContacts: getvisibleContacts(state),
  isLoading: getLoading(state),
});

export default connect(mapStateToProps)(ContactList);
