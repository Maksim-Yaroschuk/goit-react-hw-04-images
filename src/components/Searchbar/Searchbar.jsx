import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export const SearchField = ({ find }) => {
  return (
<header className={css.searchbar}>
  <form className={css.searchForm} onSubmit={find}>
    <button type="submit" className={css.searchFormButton}>
      <span className={css.searchFormButtonLabel}>Search</span>
    </button>

    <input
      className={css.searchFormInput}
          type="text"
          name="findForm"
      // autocomplete="off"
      // autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
  );
};
