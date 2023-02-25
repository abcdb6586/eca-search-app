import React from "react";
import styles from './index.module.scss'

const SearchCard = ({ text }) => {
  return (
    <div className={styles['search-card']} >
      <span>{text}</span>
    </div>
  )
}

export default SearchCard