import React from 'react'
import styles from './index.module.scss'

const tranferPrice = (price) => {
  const splitNumber = String(price).split('')
  splitNumber.splice(splitNumber.length - 2, 0, ',').join('')
  return splitNumber
}

const ResultCard = ({ node }) => {
  const {
    product_name,
    price,
    price_discount: discount,
    product_description,
  } = node

  const description = product_description[0]?.children[0]?.text ?? ''

  return (
    <li className={styles['result-card']}>
      <span className={styles['detail__name']}>
        {product_name}
      </span>
      <div className={styles['detail__tooltip']}>
        <span className={styles['detail__tooltip__text']}>{description}</span>
      </div>

      <div className={styles['detail__price']}>
        <span
          className={styles['detail__price__original']}
          style={discount ? { textDecoration: 'line-through' } : { fontSize: 'unset' }}
        >
          € {tranferPrice(price)}
        </span>

        {discount && (
          <span className={styles['detail__price__discount']}>
            € {tranferPrice(discount)}
          </span>
        )}
      </div>
    </li>
  )
}

export default ResultCard
