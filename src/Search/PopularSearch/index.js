import React from 'react'
import SearchCard from './SearchCard'
import styles from './index.module.scss'


const popularTexts = ['Korea', 'Japan', 'Taiwan', 'bubble tea']

const PopularSearch = () => {
    return (
        <div className={styles['popular-search-section']}>
            <span className={styles.title}>Populärsuche</span>
            {popularTexts.map((text) => <SearchCard text={text} />)}
        </div>
    )
}

export default PopularSearch