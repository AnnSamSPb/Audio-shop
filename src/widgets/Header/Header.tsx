import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { HiHeart } from 'react-icons/hi';
import styles from './Header.module.css';
import { CartButton } from '@/features/cart/ui';
import { Container } from '@/shared/ui/Container/Container';

export const Header: FC = () => {
  const favoritesCount = 2; // Заглушка "2"

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo} aria-label="QPICK - вернуться на главную">
            QPICK
          </Link>

          <nav className={styles.nav} aria-label="Действия пользователя">
            <ul className={styles.navList} role="list">
              <li className={styles.navItem}>
                <button 
                  className={styles.favoritesButton} 
                  aria-label={`Избранное, ${favoritesCount} товаров`}
                >
                  <HiHeart />
                  <span className={styles.favoritesCounter}>{favoritesCount}</span>
                </button>
              </li>

              <li className={styles.navItem}>
                <CartButton />
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};
