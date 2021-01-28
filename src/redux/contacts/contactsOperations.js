import axios from "axios";
import {
  contactRequest,
  contactSuccess,
  contactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from "./contactsAction";

const addToContactsDB = (name, number) => (dispatch) => {
  dispatch(contactRequest());
  axios
    .post("http://localhost:1500/contacts", { name, number })
    .then(({ data }) => {
      dispatch(contactSuccess(data));
    })
    .catch((error) => dispatch(contactError(error)));
};
const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactsRequest());
  axios
    .get("http://localhost:1500/contacts")
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch((error) => dispatch(fetchContactsError(error)));
};
const removeContact = (id) => (dispatch) => {
  dispatch(removeContactRequest());
  axios
    .delete(`http://localhost:1500/contacts/${id}`)
    .then(() => dispatch(removeContactSuccess(id)))
    .catch((error) => dispatch(removeContactError(error)));
};

export { addToContactsDB, fetchContacts, removeContact };
