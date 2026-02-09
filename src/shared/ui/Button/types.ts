import type React from 'react';

export type LayoutVariant = 'full' | 'fixed';
export type StyleVariant = 'primary' | 'secondary' | 'outlined';
// export type Color = 'black' | 'orange' | 'ghost';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: LayoutVariant;
  styleType?: StyleVariant;
  // color?: Color;
  isLoading?: boolean;
};
