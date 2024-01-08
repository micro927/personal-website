import { ContactIconStyleMapping } from './types/app';
import { ContactIconEnum } from './types/app';
import {
  SiGithub,
  SiLinkedin,
  SiFacebook,
  SiMicrosoftoutlook,
} from 'react-icons/si';

export const iconStyleMapping: ContactIconStyleMapping = {
  [ContactIconEnum.GITHUB]: {
    icon: SiGithub,
    color: 'group-hover:bg-black',
  },
  [ContactIconEnum.LINKEDIN]: {
    icon: SiLinkedin,
    color: 'group-hover:bg-linkedin',
  },
  [ContactIconEnum.EMAIL]: {
    icon: SiMicrosoftoutlook,
    color: 'group-hover:bg-outlook',
  },
  [ContactIconEnum.FACEBOOK]: {
    icon: SiFacebook,
    color: 'group-hover:bg-facebook',
  },
};
