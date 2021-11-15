import PropTypes from 'prop-types';
import styles from 'components/ContactList/ContactList.module.css';
// import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { useDispatch } from 'react-redux';

export default function ContactItem({ number, id, name }) {
  const dispatch = useDispatch();
  const deleteContact = id => dispatch(actions.deleteContact(id));

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

// const mapDispatchToProps = dispatch => {
//   return {
//     deleteContact: id => dispatch(actions.deleteContact(id)),
//   };
// };

// export default connect(null, mapDispatchToProps)(ContactItem);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
