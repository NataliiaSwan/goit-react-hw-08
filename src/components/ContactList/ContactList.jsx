import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  setFilteredContacts,
  getError,
  getLoading,
} from "../../redux/contacts/selectors";

import css from "./ContactList.module.css";

import Contact from "../Contact/Contact";

import Loader from "../../components/Loader/Loader";

import { deleteContact } from "../../redux/contacts/operations";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(setFilteredContacts);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <ul className={css.contactList}>
        {loading && !error && <Loader />}
        {error && <p>Oops, something went wrong! Please, try again</p>}
        {filteredContacts.map((contact) => (
          <Contact
            key={contact.id}
            item={contact}
            onDeleteContact={() => handleDeleteContact(contact.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
