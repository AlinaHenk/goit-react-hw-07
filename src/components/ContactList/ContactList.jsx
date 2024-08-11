import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contactsInState = useSelector(selectFilteredContacts);
  const filterValue = useSelector(selectFilter);

  return (
    <div className={css.group}>
      {contactsInState.map((contact) => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </div>
  );
}
