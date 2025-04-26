export enum JobTypeEnum {
  FRONTEND = 'front-end developer',
  BACKEND = 'back-end developer',
  FULLSTACK = 'full stack developer',
  NONE = 'non programming developer',
}

export enum TechSkillTypeEnum {
  LANGUAGE = 'language',
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  DATABASE = 'database',
  OPERATION = 'operation',
}

export enum TechSkillIdEnum {
  PHP = 'php',
  JS = 'js',
  TS = 'ts',
  TAILWIND = 'tailwind',
  HTML = 'html',
  GITHUB_ACTIONS = 'github_actions',
  CSS = 'css',
  PYTHON = 'python',
  NODEJS = 'nodejs',
  EXPRESSJS = 'expressjs',
  REACTJS = 'reactjs',
  VUEJS = 'vuejs',
  ANGULARJS = 'angularjs',
  BOOTSTRAP = 'bootstrap',
  JQUERY = 'jquery',
  MYSQL = 'mysql',
  DOCKER = 'docker',
  RXJS = 'rxjs',
  REDUX = 'redux',
  WEBSOCKET = 'websocket',
}

export enum LanguageSkillLevelEnum {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
  EXPERT = 'expert',
  NATIVE = 'native',
}

export type PersonalInformation = {
  name: string;
  surname: string;
  nameTH: string;
  surnameTH: string;
  nickname: string;
  born: string;
  hometown: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  facebook: string;
  mainJobTitle: string;
  aboutMe: string;
};

export interface Work {
  jobNo: number;
  jobTitle: string;
  jobType: JobTypeEnum;
  organization: string;
  organizationURL: string;
  city: string;
  country: string;
  dateStart: string;
  dateEnd: string;
  descriptionList: string[];
  skillList: TechSkillIdEnum[];
}

export type TechSkill = {
  skillId: TechSkillIdEnum;
  skillTitle: string;
  type: TechSkillTypeEnum;
  level: number;
};

export type Education = {
  level: number;
  levelTitle: string;
  levelTitleTH: string;
  majorTitle: string;
  majorTitleTH: string;
  institute: string;
  degree: string;
  yearGrad: string;
  researchTitle?: string;
  researchFields?: string[];
  researchTools?: string[];
  researchUrls?: string;
};

export type LanguageSkill = {
  languageTitle: string;
  level: LanguageSkillLevelEnum;
};

export type Data = {
  personalInformation: PersonalInformation;
  works: Work[];
  techSkills: TechSkill[];
  educations: Education[];
  languageSkills: LanguageSkill[];
};
