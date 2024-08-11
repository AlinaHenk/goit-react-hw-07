import css from "./ContactForm.module.css";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

export default function ContactForm() {
  const dispatch = useDispatch();
  const handleAddContact = (contact) => {
    contact.id = nanoid();
    dispatch(addContact(contact));
  };
  const initialValues = {
    name: "",
    number: "",
  };

  const nameFieldId = useId();
  const numberlFieldId = useId();

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    handleAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.contactFormMain}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label htmlFor={numberlFieldId}>Number</label>
        <Field type="text" name="number" id={numberlFieldId} />
        <ErrorMessage className={css.error} name="number" component="span" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
