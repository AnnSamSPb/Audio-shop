import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '@/app/store/hooks'
import { selectCartCount } from '../slice'
import cartIcon from '@/assets/icons/Cart.svg'
import styles from './CartButton.module.css'

export const CartButton: FC = () => {
  const cartCount = useAppSelector(selectCartCount)

  return (
    <Link
      to="/cart"
      className={styles.cartButton}
      aria-label={`Корзина, ${cartCount} товаров`}
    >
      <img 
        src={cartIcon} 
        alt="Корзина" 
        className={styles.cartIcon}
      />
      {cartCount > 0 && (
        <span className="counter-badge">{cartCount}</span>
      )}
    </Link>
  )
}
