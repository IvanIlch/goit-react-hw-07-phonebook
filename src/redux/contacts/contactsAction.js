import { createAction } from "@reduxjs/toolkit";

const contactRequest = createAction("addRequest");
const contactSuccess = createAction("addSuccess");
const contactError = createAction("addError");

const fetchContactsRequest = createAction("fetchRequest");
const fetchContactsSuccess = createAction("fetchSuccess");
const fetchContactsError = createAction("fetchError");

const removeContactRequest = createAction("removeContactRequest");
const removeContactSuccess = createAction("removeContactSuccess");
const removeContactError = createAction("removeContactError");

const removeContacts = createAction("REMOVE_CONTACT");
const changeFilter = createAction("CHANGE_FILTER");

export {
  contactRequest,
  contactSuccess,
  contactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  removeContacts,
  changeFilter,
};
