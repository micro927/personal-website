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

export enum TechSkillEnum {
  LANGUAGE = 'language',
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  DATABASE = 'database',
  OTHER = 'other',
}

export type TechSkill = {
  skillId: string;
  skillTitle: string;
  type: TechSkillEnum;
  level: number;
};
export type TechSkills = TechSkill[];

export enum LanguageSkillsLevelENUM {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
  EXPERT = 'expert',
  NATIVE = 'native',
}

export type LanguageSkill = {
  languageTitle: string;
  level: LanguageSkillsLevelENUM;
};
export type LanguageSkills = LanguageSkill[];

export interface WorkItem {
  jobNo: number;
  jobTitle: string;
  jobField: string;
  organization: string;
  dateStart: string;
  dateEnd: string;
  descriptionList: string[];
  tagList: string[];
}

export type Work = WorkItem[];

export interface WorkSelectorItem {
  jobNo: number;
  jobField: string;
  dateStart: string;
  dateEnd: string;
  isSelected: boolean;
}

export type WorkSelector = WorkSelectorItem[];

export type EducationItem = {
  level: number;
  levelTitle: string;
  levelTitleTH: string;
  majorTitle: string;
  majorTitleTH: string;
  institute: string;
  degree: string;
  yearGrad: string;
  researchTitle?: string;
  researchFields?: Array<Record<string, unknown>>;
  researchTools?: Array<Record<string, unknown>>;
  researchUrls?: string;
};

export type Education = EducationItem[];

export type Data = {
  personalInformation: PersonalInformation;
  education: Education;
  work: Work;
  techSkills: TechSkills;
  languageSkills: LanguageSkills;
};
