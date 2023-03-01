import React from "react";
import styles from './index.module.scss'

const SearchCard = ({ text, handleClick }) => {
  return (
    <div className={styles['search-card']} onClick={handleClick}>
      <span>{text}</span>
    </div>
  )
}

export default SearchCard