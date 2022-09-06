import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ text, loadMore }) => {
  return (
    <button onClick={loadMore} className={css.button} type="button">
      {text}
    </button>
  );
};

Button.propType = {
  text: PropTypes.string.isRequired,
  loadMore: PropTypes.func.isRequired,
};