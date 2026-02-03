import { type FC, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { cartActions, selectCartItems, selectCartTotal } from '@features/cart'
import { getProductById } from '@entities/product'
import { Counter } from '@shared/ui/Counter'
import { Button } from '@shared/ui/Button'
import { FiTrash2 } from 'react-icons/fi'
import styles from './CartPage.module.css'

interface CartItemWithDetails {
  id: number
  title: string
  price: number
  img: string
  quantity: number
  productExists: boolean
}

export const CartPage: FC = () => {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(selectCartItems)
  const cartTotal = useAppSelector(selectCartTotal)

  const cartItemsWithDetails: CartItemWithDetails[] = useMemo(() => {
    return cartItems.map(item => {
      const product = getProductById(item.id)
      return {
        ...item,
        productExists: !!product,
        title: product?.title || item.title,
        price: product?.price || item.price,
        img: product?.img || item.img,
      }
    })
  }, [cartItems])

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(cartActions.updateQuantity({ id, quantity }))
  }

  const handleRemoveItem = (id: number) => {
    dispatch(cartActions.removeItem(id))
  }

  const handleClearCart = () => {
    if (window.confirm('Очистить корзину?')) {
      dispatch(cartActions.clearCart())
    }
  }

  const handleCheckout = () => {
    alert('Заказ оформлен! Спасибо за покупку!')
    dispatch(cartActions.clearCart())
  }

  if (cartItems.length === 0) {
    return (
      <div className={styles.cartPage}>
        <div className="container">
          <div className={styles.emptyCart}>
            <h1 className={styles.title}>Корзина пуста</h1>
            <p className={styles.emptyText}>Добавьте товары из каталога</p>
            <Link to="/">
              <Button variant="primary">Вернуться к покупкам</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.cartPage}>
      <div className="container">
        <div className={styles.cartHeader}>
          <h1 className={styles.title}>Корзина</h1>
          <Link to="/" className={styles.backLink}>
            ← Назад к покупкам
          </Link>
        </div>

        <div className={styles.cartContent}>
          <div className={styles.cartItems}>
            {cartItemsWithDetails.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemInfo}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className={styles.itemImage}
                  />
                  <div className={styles.itemDetails}>
                    <h3 className={styles.itemTitle}>
                      {item.title}
                      {!item.productExists && (
                        <span className={styles.warningBadge}> (Товар удален)</span>
                      )}
                    </h3>
                    <div className={styles.itemPrice}>
                      {item.price.toLocaleString('ru-RU')} ₽
                    </div>
                  </div>
                </div>

                <div className={styles.itemControls}>
                  <Counter
                    value={item.quantity}
                    onIncrement={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                    onDecrement={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                  />
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className={styles.removeButton}
                    aria-label={`Удалить ${item.title} из корзины`}
                  >
                    <FiTrash2 size={20} />
                  </button>
                </div>

                <div className={styles.itemTotal}>
                  {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cartSummary}>
            <div className={styles.summaryHeader}>
              <h3 className={styles.summaryTitle}>Итого</h3>
              <div className={styles.summaryPrice}>
                {cartTotal.toLocaleString('ru-RU')} ₽
              </div>
            </div>

            <div className={styles.summaryDetails}>
              <div className={styles.summaryRow}>
                <span>Товары ({cartCount})</span>
                <span>{cartTotal.toLocaleString('ru-RU')} ₽</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Доставка</span>
                <span>Бесплатно</span>
              </div>
            </div>

            <div className={styles.summaryActions}>
              <Button
                variant="primary"
                fullWidth
                size="large"
                onClick={handleCheckout}
              >
                Перейти к оформлению
              </Button>
              <Button
                variant="outline"
                fullWidth
                onClick={handleClearCart}
              >
                Очистить корзину
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
