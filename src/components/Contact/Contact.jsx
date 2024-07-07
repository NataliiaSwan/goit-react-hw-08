import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contacts/operations";

import css from "./Contact.module.css";

const Contact = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.contactList}>
      <li className={css.contacts}>
        <div className={css.contactItem}>
          <p className={css.name}>{name}</p>
          <p className={css.number}>{number}</p>
        </div>
        <button className={css.button} onClick={handleDelete}>
          Delete
        </button>
      </li>
    </div>
  );
};
export default Contact;
