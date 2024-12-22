/* eslint-disable react/prop-types */
import css from './Contact.module.css';
import { FaUserLarge } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';

function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <p className={css.pUser}>
          <FaUserLarge className={css.iconUser} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.iconPhone} /> {number}
        </p>
      </div>
      <button className={css.btn} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
