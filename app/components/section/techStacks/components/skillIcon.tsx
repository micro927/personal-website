import type { IconBaseProps } from 'react-icons';
import { getSkillIcon } from '@/app/core/function/getSkillIcon';
import { TechSkillIdEnum } from '@/app/core/types/data';

const SkillIcon = (props: IconBaseProps & { skillId: TechSkillIdEnum }) => {
  const ThisIcon = getSkillIcon(props.skillId);
  const iconBaseProps = (({ skillId, ...rest }) => {
    if (skillId) return rest;
  })(props);

  return <>{ThisIcon && <ThisIcon {...iconBaseProps} />}</>;
};

export default SkillIcon;
