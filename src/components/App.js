import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import ContactForm from "./form/Form";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";
import Layout from "./layuot/Layout";
import { fetchContacts } from "../redux/contacts/contactsOperations";
import { getLoading } from "../redux/contacts/contactsSelectors";
import styles from "./App.module.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Layout>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={styles}
          unmountOnExit
        >
          {(stage) => {
            return (
              <>
                <h1 className={styles.title}>Phonebook</h1>
                <CSSTransition
                  in={stage === "entered"}
                  appear={true}
                  timeout={500}
                  classNames={styles}
                  unmountOnExit
                >
                  <ContactForm addToContacts={this.addToContacts} />
                </CSSTransition>
                <CSSTransition
                  in={stage === "entered"}
                  appear={true}
                  timeout={500}
                  classNames={styles}
                  unmountOnExit
                >
                  <>
                    <h2 className={styles.title}>Contacts</h2>
                    <CSSTransition
                      in={true}
                      appear={true}
                      timeout={500}
                      classNames={styles}
                      unmountOnExit
                    >
                      <Filter />
                    </CSSTransition>
                    <CSSTransition
                      in={true}
                      appear={true}
                      timeout={500}
                      classNames={styles}
                      unmountOnExit
                    >
                      <ContactList />
                    </CSSTransition>
                  </>
                </CSSTransition>
              </>
            );
          }}
        </CSSTransition>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: getLoading(state),
});
const mapDispatchToProps = {
  fetchContacts: fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
