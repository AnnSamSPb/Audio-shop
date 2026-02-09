import type { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiFrown } from 'react-icons/fi';
import { Container } from '@shared/ui/Container';
import { Button } from '@shared/ui/Button';
import styles from './ErrorPage.module.css';

interface ErrorPageProps {
  title?: string;
  description?: string;
  showHomeButton?: boolean;
}

export const ErrorPage: FC<ErrorPageProps> = ({ 
  title = 'Страница не найдена',
  description = 'К сожалению, эта страница недоступна. Возможно, она была перемещена или удалена.',
  showHomeButton = true
}) => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className={styles.page}>
        <FiFrown className={styles.icon} />
        <h1 className={styles.code}>404</h1>
        
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.buttons}>
          <Button
            styleType="outlined"
            onClick={() => navigate(-1)}
          >
            Назад
          </Button>
          
          {showHomeButton && (
            <Button 
              styleType="primary"
              onClick={() => navigate('/')}
            >
              На главную
            </Button>
          )}
        </div>

        <p className={styles.catalogText}>
          Или перейдите в <Link to="/">Каталог товаров</Link>
        </p>
      </div>
    </Container>
  );
};
