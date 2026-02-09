import styles from './Button.module.css'
import type { ButtonProps } from './types';

export const Button = ({
  children,
  variant = 'fixed',
  styleType = 'primary',
  isLoading = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) => {
  const buttonClasses = [
    styles.button,
    styles[styleType],
    variant === 'full' ? styles.full : styles.fixed,
    isLoading ? styles.loading : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const isDisabled = disabled || isLoading;

  return (
    <button 
      className={buttonClasses} 
      disabled={isDisabled}
      {...props}
    >
      {isLoading && <span className={styles.loader} />}
      {children}
    </button>
  )
}
