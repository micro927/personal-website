import { Variant, Variants } from 'framer-motion';
import { MotionVariantEnum } from '../types/app';

const createShowAndHideMotionVariants = (customVariants: {
  [MotionVariantEnum.SHOW]?: Variant;
  [MotionVariantEnum.HIDDEN]?: Variant;
}): Variants => {
  return {
    [MotionVariantEnum.SHOW]: Object.assign(
      {
        opacity: 1,
      },
      customVariants?.[MotionVariantEnum.SHOW],
    ),
    [MotionVariantEnum.HIDDEN]: Object.assign(
      {
        opacity: 0,
      },
      customVariants?.[MotionVariantEnum.HIDDEN],
    ),
  };
};

export default createShowAndHideMotionVariants;
