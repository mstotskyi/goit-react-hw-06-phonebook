// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

import ContactItem from 'components/ContactList/ContactItem';
import styles from 'components/ContactList/ContactList.module.css';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from '../../redux/selectors';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);

  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.contactListItem}>
          <ContactItem
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  );
}

// const mapStateToProps = state => {
//   return {
//     contacts: state.phonebook.contacts,
//     filter: state.phonebook.filter,
//   };
// };

// export default connect(mapStateToProps, null)(ContactList);

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
// };
