import PropTypes from 'prop-types';
import styles from 'components/ContactList/ContactList.module.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

function ContactItem({ number, id, name, deleteContact }) {
  return (
    <>
      <span className={styles.contactName}>{name}:</span>
      <span> {number}</span>
      <button
        className={styles.contactDeleteBtn}
        type="button"
        id={id}
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </>
  );
}

const mapDispatchToProps = disputch => {
  return {
    deleteContact: id => disputch(actions.deleteContact(id)),
  };
};

export default connect(null, mapDispatchToProps)(ContactItem);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func,
};
