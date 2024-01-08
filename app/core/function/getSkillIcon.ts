import { IconType } from 'react-icons';
import {
  SiPhp,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiVuedotjs,
  SiBootstrap,
  SiJquery,
  SiMysql,
  SiDocker,
  SiGithubactions,
  SiTypescript,
  SiTailwindcss,
} from 'react-icons/si';
import { SkillIdEnum } from '../types/data';

export function getSkillIcon(skillId: SkillIdEnum) {
  const skillIconMapping: Record<SkillIdEnum, IconType> = {
    [SkillIdEnum.PHP]: SiPhp,
    [SkillIdEnum.JS]: SiJavascript,
    [SkillIdEnum.TS]: SiTypescript,
    [SkillIdEnum.TAILWIND]: SiTailwindcss,
    [SkillIdEnum.HTML]: SiHtml5,
    [SkillIdEnum.GITHUB_ACTIONS]: SiGithubactions,
    [SkillIdEnum.CSS]: SiCss3,
    [SkillIdEnum.PYTHON]: SiPython,
    [SkillIdEnum.NODEJS]: SiNodedotjs,
    [SkillIdEnum.EXPRESSJS]: SiExpress,
    [SkillIdEnum.REACTJS]: SiReact,
    [SkillIdEnum.VUEJS]: SiVuedotjs,
    [SkillIdEnum.BOOTSTRAP]: SiBootstrap,
    [SkillIdEnum.JQUERY]: SiJquery,
    [SkillIdEnum.MYSQL]: SiMysql,
    [SkillIdEnum.DOCKER]: SiDocker,
  };
  return skillIconMapping?.[skillId] ?? undefined;
}
