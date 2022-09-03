import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export const SearchField = ({ props }) => {
  return (
<header className={css.searchbar}>
  <form className={css.searchForm}>
    <button type="submit" className={css.searchFormButton}>
      <span className={css.searchFormButtonLabel}>Search</span>
    </button>

    <input
      className={css.searchFormInput}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
  );
};
