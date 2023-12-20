import { ComponentProps } from 'react';

export type MenuList = {
  title: string;
  shortTitle?: string;
  link: string;
}[];

export enum VariantEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ACCENT = 'accent',
  LIGHT = 'light',
}

export type ButtonProps = {
  variant?: VariantEnum;
} & ComponentProps<'button'>;
