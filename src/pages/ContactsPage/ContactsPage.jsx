import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchContacts } from "../../redux/contacts/operations";

import { getContacts, getLoading } from "../../redux/contacts/selectors";

import { selectNameFilter } from "../../redux/filters/selectors";

import ContactForm from "../../components/ContactForm/ContactForm";

import ContactList from "../../components/ContactList/ContactList";

import SearchBox from "../../components/SearchBox/SearchBox";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);
  const filter = useSelector(selectNameFilter);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ContactForm />
      {/* <Filter /> */}
      <SearchBox value={search} onChange={setSearch} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ContactList contacts={filteredContacts} />
      )}
    </div>
  );
};
export default ContactsPage;
