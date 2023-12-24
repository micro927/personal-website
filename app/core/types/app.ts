import { ComponentProps } from 'react';
import { ContactIconEnum } from './icon';
import { IconType } from 'react-icons';

export type MenuList = {
  title: string;
  shortTitle?: string;
  link: string;
}[];

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
