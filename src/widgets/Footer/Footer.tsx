import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { FaVk, FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { IoEarth } from 'react-icons/io5'
import { APP_CONSTANTS } from '@shared/config/constants'
import styles from './Footer.module.css'

export const Footer: FC = () => {
  const handleSocialClick = (platform: 'vk' | 'telegram' | 'whatsapp') => {
    const urls = {
      vk: APP_CONSTANTS.SOCIAL_LINKS.VK,
      telegram: APP_CONSTANTS.SOCIAL_LINKS.TELEGRAM,
      whatsapp: APP_CONSTANTS.SOCIAL_LINKS.WHATSAPP,
    };
    
    window.open(urls[platform], '_blank', 'noopener,noreferrer,nofollow');
  };

  const handleCall = () => {
    window.location.href = `tel:${APP_CONSTANTS.CONTACTS.PHONE.TEL}`;
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.column}>
            <div className={styles.logo}>QPICK</div>
          </div>
          
          <div className={styles.column}>
            <nav className={styles.nav} aria-label="Навигация по сайту">
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <Link to="/favorites" className={styles.navLink}>
                    Избранное
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/cart" className={styles.navLink}>
                    Корзина
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <button
                    onClick={handleCall}
                    className={styles.navLink}
                    aria-label={`Позвонить по телефону ${APP_CONSTANTS.CONTACTS.PHONE.DISPLAY}`}
                  >
                    Контакты
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          
          <div className={styles.column}>
            <div className={styles.serviceTerms}>
              <Link to="/terms" className={styles.termsLink}>
                Условия сервиса
              </Link>
              
              <div
                className={styles.languageSwitcher}
                role="group" 
                aria-label="Выбор языка"
              >
                <IoEarth className={styles.earthIcon} aria-hidden="true"/>
                <ul className={styles.languageList}>
                  <li>
                    <button className={styles.languageButton}>Kaz</button>
                  </li>
                  <li>
                    <button className={`${styles.languageButton} ${styles.active}`}>
                      Рус
                    </button>
                  </li>
                  <li>
                    <button className={styles.languageButton}>Eng</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={styles.column}>
            <div className={styles.socialLinks} aria-label="Социальные сети">
              <ul className={styles.socialList}>
                <li>
                  <button
                    onClick={() => handleSocialClick('vk')}
                    className={styles.socialLink}
                    aria-label="ВКонтакте"
                  >
                    <FaVk aria-hidden="true"/>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSocialClick('telegram')}
                    className={styles.socialLink}
                    aria-label="Telegram"
                  >
                    <FaTelegram aria-hidden="true"/>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSocialClick('whatsapp')}
                    className={styles.socialLink}
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp aria-hidden="true"/>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
