import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.phonebook.isLoadind;
const getContacts = (state) => state.phonebook.contacts;
const getFilter = (state) => state.phonebook.filter;

const getvisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
const getContactById = (state, id) => {
  const contacts = getContacts(state);
  return contacts.find((contact) => contact.id === id);
};

export {
  getLoading,
  getContacts,
  getFilter,
  getvisibleContacts,
  getContactById,
};
