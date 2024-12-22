/* eslint-disable react/prop-types */
import { useId } from 'react';
import css from './SearchBox.module.css';
function SearchBox({ onSearch }) {
  const searchFieldId = useId();
  return (
    <div className={css.div}>
      <label htmlFor={searchFieldId}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        name="search"
        id={searchFieldId}
        onChange={e => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
