import React, { Component } from "react";
import { connect } from "react-redux";
import { addToContactsDB } from "../../redux/contacts/contactsOperations";
import styles from "./Form.module.css";

const inicial_state = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  state = { ...inicial_state };
  addToName = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    const { name, number } = this.state;
    e.preventDefault();
    this.props.addToContacts(name, number);
    this.setState({ ...inicial_state });
  };

  render() {
    return (
      <form className={styles.form}>
        <label>
          Name
          <input
            value={this.state.name}
            type="text"
            name="name"
            placeholder="Введіть ім'я"
            onChange={this.addToName}
          ></input>
        </label>
        <label>
          Phone
          <input
            value={this.state.number}
            type="tel"
            name="number"
            placeholder="Введіть телефон"
            onChange={this.addToName}
          ></input>
        </label>
        <button type="submit" onClick={this.handleSubmit}>
          Add contact
        </button>
      </form>
    );
  }
}
const mapDispatchToProps = {
  addToContacts: addToContactsDB,
};
export default connect(null, mapDispatchToProps)(ContactForm);
