import type { FC } from 'react'
import { useAppDispatch } from '@/app/store/hooks'
import { ProductCard } from '@entities/product'
import {
  getWiredHeadphones,
  getWirelessHeadphones
} from '@entities/product'
import { cartActions } from '@features/cart'
import type { Product } from '@entities/product'
import styles from './HomePage.module.css'
import { Container } from '@/shared/ui/Container'

export const HomePage: FC = () => {
  const dispatch = useAppDispatch()

  // Получаем товары по категориям через функции
  const wiredHeadphones = getWiredHeadphones()
  const wirelessHeadphones = getWirelessHeadphones()

  const handleAddToCart = (product: Product) => {
    dispatch(cartActions.addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
    }))
  }

  return (
    <div className={styles.mainPage}>
      {/* <div className="container"> */}
      <Container>
        {/* Раздел "Наушники" (6 карточек) */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Наушники</h2>
          <div className={styles.productsGrid}>
            {wiredHeadphones.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>
      </Container>

      <Container>
        {/* Раздел "Беспроводные наушники" (3 карточки) */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Беспроводные наушники</h2>
          <div className={styles.productsGrid}>
            {wirelessHeadphones.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>
      </Container>
      {/* </div> */}
    </div>
  )
}
