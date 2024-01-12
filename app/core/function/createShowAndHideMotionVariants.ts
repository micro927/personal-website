import { Variant, Variants } from 'framer-motion';
import { MotionVariantEnum } from '../types/app';

const createShowAndHideMotionVariants = (customVariants: {
  [MotionVariantEnum.SHOW]?: Variant;
  [MotionVariantEnum.HIDDEN]?: Variant;
}): Variants => {
  return {
    [MotionVariantEnum.SHOW]: {
      opacity: 1,
      ...customVariants?.[MotionVariantEnum.SHOW],
    },
    [MotionVariantEnum.HIDDEN]: {
      opacity: 0,
      ...customVariants?.[MotionVariantEnum.HIDDEN],
    },
  };
};

export default createShowAndHideMotionVariants;
