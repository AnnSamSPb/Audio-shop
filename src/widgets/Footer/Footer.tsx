import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { APP_CONSTANTS } from '@shared/config/constants'
import earthIcon from '@/assets/icons/Earth.png'
import vkIcon from '@/assets/icons/VK.svg'
import telegramIcon from '@/assets/icons/Telegram.svg'
import whatsappIcon from '@/assets/icons/Whatsapp.svg'
import styles from './Footer.module.css'
import { Container } from '@/shared/ui/Container/Container'

export const Footer: FC = () => {
  const handleSocialClick = (platform: 'vk' | 'telegram' | 'whatsapp') => {
    const urls = {
      vk: APP_CONSTANTS.SOCIAL_LINKS.VK,
      telegram: APP_CONSTANTS.SOCIAL_LINKS.TELEGRAM,
      whatsapp: APP_CONSTANTS.SOCIAL_LINKS.WHATSAPP,
    };
    
    if (window.confirm('Вы покидаете сайт. Перейти в социальную сеть?')) {
      window.open(urls[platform], '_blank', 'noopener,noreferrer,nofollow');
    }
  };

  const handleCall = () => {
    window.location.href = `tel:${APP_CONSTANTS.CONTACTS.PHONE.TEL}`;
  };

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.column}>
            <Link to="/" className={styles.logo} aria-label="QPICK - вернуться на главную">
              QPICK
            </Link>
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
                <img 
                  src={earthIcon} 
                  alt="Выбор языка" 
                  className={styles.earthIcon}
                />
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
                    <img 
                      src={vkIcon} 
                      alt="ВКонтакте" 
                      className={styles.socialIcon}
                    />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSocialClick('telegram')}
                    className={styles.socialLink}
                    aria-label="Telegram"
                  >
                    <img 
                      src={telegramIcon} 
                      alt="Telegram" 
                      className={styles.socialIcon}
                    />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSocialClick('whatsapp')}
                    className={styles.socialLink}
                    aria-label="WhatsApp"
                  >
                    <img 
                      src={whatsappIcon} 
                      alt="WhatsApp" 
                      className={styles.socialIcon}
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
