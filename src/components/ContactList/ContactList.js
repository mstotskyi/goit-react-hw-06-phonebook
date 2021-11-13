import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContactItem from 'components/ContactList/ContactItem';
import styles from 'components/ContactList/ContactList.module.css';

function ContactList({ contacts, filter }) {
  const contactsFilter = () => {
    console.log(filter);
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  };

  const filteredContacts = contactsFilter();

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(contact => (
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

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, null)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
