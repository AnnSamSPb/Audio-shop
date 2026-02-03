import type { FC } from 'react'
import { Button } from '@shared/ui/Button'
import { FaStar } from 'react-icons/fa'
import styles from './ProductCard.module.css'
import type { ProductCardProps } from './types'

export const ProductCard: FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={product.img}
          alt={product.title}
          className={styles.image}
          loading="lazy"
        />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        
        <div className={styles.info}>
          <div className={styles.price}>
            {product.price.toLocaleString('ru-RU')} ₽
          </div>
          
          <div className={styles.rating}>
            <FaStar size={16} color="#FFCE7F" />
            <span>{product.rate}</span>
          </div>
        </div>
        
        <Button
          variant="primary"
          fullWidth
          onClick={() => onAddToCart(product)}
        >
          Купить
        </Button>
      </div>
    </div>
  )
}
