import React, { useState, useCallback, useRef } from 'react';
import algoliasearch from 'algoliasearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import ResultCard from './ResultCard';
import PopularSearch from './PopularSearch';

import styles from './index.module.scss'

const client = algoliasearch(
  '8AMGCLA2YS',
  '18a62be1c6d697316c82bc3d81fdaee2'
);
const index = client.initIndex('dev_eca_searchbar');

const Search = () => {
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState([]);
  const focusRef = useRef();


  const search = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);

    if (query.length >= 3) {
      index.search(query).then(({ hits }) => {
        setHits(hits);
      });
    } else {
      setHits([]);
    }
  }, []);

  const handleSearchClick = useCallback(() => {
    focusRef.current.focus()
  }, [])

  const clearQuery = useCallback(() => {
    setQuery('')
    setHits([])
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles['search']}>
        <div className={styles['search__searchbox']}>
          <form className={styles['search__searchbox__form']}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={styles['search__searchbox__button--search']}
              onClick={handleSearchClick}
            />
            <input
              type="text"
              className={styles['search__searchbox__input']}
              placeholder='search'
              value={query}
              ref={focusRef}
              onChange={search}
            />
            {query.length > 0 && (
              <FontAwesomeIcon
                icon={faCircleXmark}
                className={styles['search__searchbox__button--cancel']}
                onClick={clearQuery}
              />
            )}
          </form>
        </div>

        {hits.length > 0 ? (
          <ul className={styles['search__results']}>
            <span className={styles['search__results__title']}>Produkt</span>
            {hits.map(({ node, objectID }) => {
              return (
                <ResultCard key={objectID} node={node} />
              )
            }
            )}
          </ul>
        ) : query.length >= 3 && (
          <span className={styles['search__results__title--error']}>
            Keine Suchergebnisse.
          </span>
        )}

        {query.length === 0 && <PopularSearch />}
      </div>
    </div>
  );
}

export default Search;
