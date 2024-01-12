import { ComponentProps } from 'react';
import type { IconType } from 'react-icons';

export enum MotionVariantEnum {
  SHOW = 'show',
  HIDDEN = 'hidden',
}

export enum ContactIconEnum {
  GITHUB = 'github',
  LINKEDIN = 'linkedin',
  EMAIL = 'email',
  FACEBOOK = 'facebook',
}

export enum VariantEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ACCENT = 'accent',
  DARK = 'dark',
}

export type SetState<T> = (callback: ((prev: T) => T) | T) => void;

export type ButtonProps = {
  variant?: VariantEnum;
} & ComponentProps<'button'>;

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

export type OnboardingMessageContextType = {
  message: string;
  setMessage: SetState<string>;
};
