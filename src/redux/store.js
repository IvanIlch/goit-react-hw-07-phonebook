import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsReducer";

const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
  },
});
export default store;
