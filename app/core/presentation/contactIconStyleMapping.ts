import { ContactIconStyleMapping } from '../types/app';
import { ContactIconEnum } from '../types/app';
import {
  SiGithub,
  SiLinkedin,
  SiFacebook,
  SiMicrosoftoutlook,
} from 'react-icons/si';

export const iconStyleMapping: ContactIconStyleMapping = {
  [ContactIconEnum.GITHUB]: {
    icon: SiGithub,
    color: 'text-black',
  },
  [ContactIconEnum.LINKEDIN]: {
    icon: SiLinkedin,
    color: 'text-linkedin',
  },
  [ContactIconEnum.EMAIL]: {
    icon: SiMicrosoftoutlook,
    color: 'text-outlook',
  },
  [ContactIconEnum.FACEBOOK]: {
    icon: SiFacebook,
    color: 'text-facebook',
  },
};
