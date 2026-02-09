import type { FC } from 'react';
import { Link } from 'react-router-dom';
import favoritesIcon from '@/assets/icons/Heart.svg';
import styles from './Header.module.css';
import { CartButton } from '@/features/cart/ui';
import { Container } from '@/shared/ui/Container';

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
                  aria-label={`Избранное, ${favoritesCount} товар${getCountSuffix(favoritesCount)}`}
                >
                  <img 
                    src={favoritesIcon} 
                    alt="Избранное" 
                    className={styles.favoritesIcon}
                  />
                  {favoritesCount > 0 && (
                    <span className="counter-badge">{favoritesCount}</span>
                  )}
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

// Вспомогательная функция для правильного окончания
function getCountSuffix(count: number): string {
  if (count % 10 === 1 && count % 100 !== 11) return '';
  if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) return 'а';
  return 'ов';
}
