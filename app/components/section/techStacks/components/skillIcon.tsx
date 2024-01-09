import type { IconBaseProps } from 'react-icons';
import { getSkillIcon } from '@/app/core/function/getSkillIcon';
import { SkillIdEnum } from '@/app/core/types/data';

const SkillIcon = (props: IconBaseProps & { skillId: SkillIdEnum }) => {
  const ThisIcon = getSkillIcon(props.skillId);
  const iconBaseProps = (({ skillId, ...rest }) => {
    if (skillId) return rest;
  })(props);

  return <>{ThisIcon && <ThisIcon {...iconBaseProps} />}</>;
};

export default SkillIcon;
