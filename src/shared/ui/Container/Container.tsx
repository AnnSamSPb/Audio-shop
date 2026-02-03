import type { FC, ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ 
  children, 
  className = ''
}) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};
