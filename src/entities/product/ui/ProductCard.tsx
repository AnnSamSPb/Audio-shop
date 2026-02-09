import type { FC } from 'react'
import { useState } from 'react'
import { Popup } from '@/shared/ui/Popup/Popup'
import type { ProductCardProps } from './types'
import starIcon from '@/assets/icons/Star.svg'
import styles from './ProductCard.module.css'

export const ProductCard: FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleAddToCart = () => {
    onAddToCart(product)
    setIsPopupOpen(true)
  }

  return (
    <>
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
          <h3 className={styles.title} title={product.title}>
            {product.title}
          </h3>
          
          <div className={styles.priceWrapper}>
            <div className={styles.priceBlock}>
              <span className={styles.price}>
                {product.price.toLocaleString('ru-RU')} ₽
              </span>
              
              {product.oldPrice && (
                <span className={styles.oldPrice}>
                  {product.oldPrice.toLocaleString('ru-RU')} ₽
                </span>
              )}
            </div>
          </div>
            
          <div className={styles.rating}>
            <img 
              src={starIcon} 
              alt="Рейтинг" 
              className={styles.starIcon}
            />
            <span className={styles.ratingValue}>{product.rate.toFixed(1)}</span>
          </div>
          
          <button
            type="button"
            onClick={handleAddToCart}
            className={`${styles.buyButton} ${styles.clickable}`}
            aria-label={`Купить ${product.title}`}
          >
            Купить
          </button>
        </div>
      </div>

      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title={`${product.title} добавлен в корзину!`}
        // autoCloseDelay={10000}
      />
    </>
  )
}
