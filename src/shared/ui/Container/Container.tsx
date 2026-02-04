import type { FC } from 'react';
import styles from './Container.module.css';
import type { ContainerProps } from './types';

export const Container: FC<ContainerProps> = ({ 
  children, 
  className = ''
}) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};
