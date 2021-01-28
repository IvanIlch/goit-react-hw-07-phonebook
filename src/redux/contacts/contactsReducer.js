import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  changeFilter,
  contactSuccess,
  contactRequest,
  contactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from "./contactsAction";

const onAddContact = (state, action) => {
  return [...state, action.payload];
};
const onRemoveContact = (state, action) => {
  console.log(action);
  return state.filter((contact) => contact.id !== action.payload);
};

const contacts = createReducer([], {
  [fetchContactsSuccess]: (state, action) => action.payload,
  [contactSuccess]: onAddContact,
  [removeContactSuccess]: onRemoveContact,
});
const isLoadind = createReducer(false, {
  [contactRequest]: () => true,
  [contactSuccess]: () => false,
  [contactError]: () => false,
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [removeContactRequest]: () => false,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});

const filter = createReducer("", {
  [changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  contacts,
  filter,
  isLoadind,
});
