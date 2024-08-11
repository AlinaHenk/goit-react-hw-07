import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  return (
    <div className={css.form}>
      <div className={css.data}>
        <i className="bi bi-person-fill">{contact.name}</i>
        <i className="bi bi-telephone-fill">{contact.number}</i>
      </div>
      <div></div>
      <button
        onClick={() => {
          dispatch(deleteContact(contact.id));
        }}
      >
        Delete
      </button>
    </div>
  );
}
