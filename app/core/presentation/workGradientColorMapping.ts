import { JobTypeEnum, TechSkillIdEnum, type Work } from '../types/data';

export const workGradientColorMapping = (work: Work) => {
  const { jobType, skillList } = work;

  switch (jobType) {
    case JobTypeEnum.FRONTEND:
      if (skillList.includes(TechSkillIdEnum.TS)) {
        return 'bg-gradient-to-tr from-primary to-accent text-primary';
      } else {
        return 'bg-gradient-to-tr from-secondary to-accent text-primary';
      }
    case JobTypeEnum.FULLSTACK:
      return 'bg-gradient-to-br from-primary to-secondary text-secondary';
    case JobTypeEnum.NONE:
      return 'bg-gradient-to-t from-slate-500 to-gray-300';
  }
};
