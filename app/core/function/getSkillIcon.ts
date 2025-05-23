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
  SiReactivex,
  SiSocketdotio,
  SiRedux,
  SiAngularjs,
} from 'react-icons/si';
import { TechSkillIdEnum } from '../types/data';

export function getSkillIcon(skillId: TechSkillIdEnum) {
  const skillIconMapping: Record<TechSkillIdEnum, IconType> = {
    [TechSkillIdEnum.PHP]: SiPhp,
    [TechSkillIdEnum.JS]: SiJavascript,
    [TechSkillIdEnum.TS]: SiTypescript,
    [TechSkillIdEnum.TAILWIND]: SiTailwindcss,
    [TechSkillIdEnum.HTML]: SiHtml5,
    [TechSkillIdEnum.GITHUB_ACTIONS]: SiGithubactions,
    [TechSkillIdEnum.CSS]: SiCss3,
    [TechSkillIdEnum.PYTHON]: SiPython,
    [TechSkillIdEnum.NODEJS]: SiNodedotjs,
    [TechSkillIdEnum.EXPRESSJS]: SiExpress,
    [TechSkillIdEnum.REACTJS]: SiReact,
    [TechSkillIdEnum.VUEJS]: SiVuedotjs,
    [TechSkillIdEnum.ANGULARJS]: SiAngularjs,
    [TechSkillIdEnum.BOOTSTRAP]: SiBootstrap,
    [TechSkillIdEnum.JQUERY]: SiJquery,
    [TechSkillIdEnum.MYSQL]: SiMysql,
    [TechSkillIdEnum.DOCKER]: SiDocker,
    [TechSkillIdEnum.RXJS]: SiReactivex,
    [TechSkillIdEnum.REDUX]: SiRedux,
    [TechSkillIdEnum.WEBSOCKET]: SiSocketdotio,
  };
  return skillIconMapping?.[skillId] ?? undefined;
}
