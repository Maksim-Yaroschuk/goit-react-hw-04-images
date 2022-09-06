import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im';

export const SearchField = ({ find }) => {
  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={find}>
        <button type="submit" className={css.searchFormButton}>
          <ImSearch style={{ width: 22, height: 22 }} />
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.searchFormInput}
          type="text"
          name="findForm"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
