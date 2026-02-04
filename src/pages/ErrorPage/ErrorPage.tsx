import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { FiFrown, FiHome, FiArrowLeft } from 'react-icons/fi';
import { Container } from '@shared/ui/Container';
import { Button } from '@shared/ui/Button';
import styles from './ErrorPage.module.css';
import type { ErrorPageProps } from './types';

export const ErrorPage: FC<ErrorPageProps> = ({ 
  title = 'Страница не найдена',
  description = 'К сожалению, эта страница недоступна. Возможно, она была перемещена или удалена.',
  showHomeButton = true
}) => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className={styles.pageWrapper}>
      <Container>
        <div className={styles.page}>
          
          {/* Иконка ошибки */}
          <div 
            className={styles.errorIconContainer}
            role="img"
            aria-label="Иконка страницы не найдена"
          >
            <FiFrown className={styles.errorIcon} aria-hidden="true" />
            <div className={styles.errorCode}>404</div>
          </div>

          {/* Текстовый контент */}
          <div className={styles.errorContent}>
            <h1 className={styles.errorTitle}>{title}</h1>
            <p className={styles.errorDescription}>
              {description}
            </p>
            
            {/* Дополнительная помощь */}
            <div className={styles.helpSection}>
              <p className={styles.helpTitle}>Что можно сделать:</p>
              <ul className={styles.helpList}>
                <li className={styles.helpItem}>
                  Проверьте правильность URL-адреса
                </li>
                <li className={styles.helpItem}>
                  Убедитесь, что страница существует
                </li>
                <li className={styles.helpItem}>
                  Вернитесь на предыдущую страницу
                </li>
              </ul>
            </div>
          </div>

          {/* Кнопки действий */}
          <div className={styles.actions}>
            <Button
              variant="outline"
              size="large"
              onClick={handleGoBack}
              className={styles.actionButton}
              icon={<FiArrowLeft />}
            >
              Назад
            </Button>
            
            {showHomeButton && (
              <Link to="/" className={styles.actionLink}>
                <Button
                  variant="primary"
                  size="large"
                  className={styles.actionButton}
                  icon={<FiHome />}
                >
                  На главную
                </Button>
              </Link>
            )}
          </div>

          {/* Ссылка на каталог */}
          <div className={styles.catalogSection}>
            <p className={styles.catalogText}>
              Или перейдите в{' '}
              <Link to="/" className={styles.catalogLink}>
                каталог товаров
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
