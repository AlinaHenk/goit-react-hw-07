import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contactsInState = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  return (
    <div className={css.group}>
      {contactsInState
        .filter(
          (contact) =>
            contact.name
              .toLowerCase()
              .trim()
              .indexOf(filterValue.toLowerCase().trim(), 0) >= 0 ||
            filterValue === ""
        )
        .map((contact) => (
          <Contact contact={contact} key={contact.id} />
        ))}
    </div>
  );
}
