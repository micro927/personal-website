import { ComponentProps } from 'react';
import type { IconType } from 'react-icons';

export type MenuList = {
  title: string;
  shortTitle?: string;
  link: string;
}[];

export enum ContactIconEnum {
  GITHUB = 'github',
  LINKEDIN = 'linkedin',
  EMAIL = 'email',
  FACEBOOK = 'facebook',
}

export type ContactIconStyleMapping = Record<
  ContactIconEnum,
  {
    icon: IconType;
    color: string;
  }
>;

export enum VariantEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ACCENT = 'accent',
  LIGHT = 'light',
}

export type ButtonProps = {
  variant?: VariantEnum;
} & ComponentProps<'button'>;
