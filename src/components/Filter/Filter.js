import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

function Filter({ handleOnChangefilter }) {
  const IdFilter = uuid();

  return (
    <>
      <label htmlFor={IdFilter}>Find contacts by name</label>
      <br />
      <input
        id={IdFilter}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={handleOnChangefilter}
      />
    </>
  );
}

Filter.propTypes = {
  handleOnChangefilter: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
  return {
    handleOnChangefilter: e =>
      dispatch(actions.handleOnChangefilter(e.target.value)),
  };
};

export default connect(null, mapDispatchToProps)(Filter);
