import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '@/app/store/hooks'
import { selectCartCount } from '../slice'
import { FiShoppingCart } from 'react-icons/fi'
import styles from './CartButton.module.css'

export const CartButton: FC = () => {
  const cartCount = useAppSelector(selectCartCount)

  return (
    <Link
      to="/cart"
      className={styles.cartButton}
      aria-label={`Корзина, ${cartCount} товаров`}
    >
      <FiShoppingCart />
      {cartCount > 0 && (
        <span className={styles.counter}>{cartCount}</span>
      )}
    </Link>
  )
}
