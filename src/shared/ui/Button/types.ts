import type { ButtonHTMLAttributes, ReactNode } from 'react';
// import type React from 'react';

// export type Variant = 'full' | 'fixed';
// export type Color = 'green' | 'white' | 'ghost';

// export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
//   variant?: Variant;
//   color?: Color;
//   isLoading?: boolean;
//   // Свойства для кнопки лайка
//   isLikeButton?: boolean;
//   isLiked?: boolean;
//   likedIcon?: React.ReactNode;
//   unlikedIcon?: React.ReactNode;
//   onToggleLike?: (liked: boolean) => void;
// };


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: ReactNode;
}
