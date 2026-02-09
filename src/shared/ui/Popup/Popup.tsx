import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Popup.module.css';
import type { PopupProps } from './types';

export const Popup: FC<PopupProps> = ({ 
  isOpen, 
  onClose, 
  title = 'Товар добавлен в корзину',
  autoCloseDelay = 0
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  // Автозакрытие
  useEffect(() => {
    if (isOpen && autoCloseDelay > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDelay);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoCloseDelay, onClose]);

  // Клавиатурная навигация (только Escape для закрытия)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div 
      className={`${styles.popup} ${isOpen ? styles.popup_opened : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div 
        ref={popupRef}
        className={styles.popup__container}
      >
        <button 
          className={`${styles.popup__cross}`}
          onClick={onClose}
          type="button"
          aria-label="Закрыть"
        >
          ×
        </button>
        
        <h3 id="popup-title" className={styles.popup__title}>
          {title}
        </h3>
        
        <div className={styles.popup__content}>
          <Link 
            to="/cart" 
            className={styles.popup__cartLink}
            onClick={onClose}
          >
            Перейти в корзину
          </Link>

          <button 
            className={`${styles.popup__button}`}
            onClick={onClose}
            autoFocus
            type="button"
          >
            Продолжить покупки
          </button>
        </div>
      </div>
    </div>
  );
};