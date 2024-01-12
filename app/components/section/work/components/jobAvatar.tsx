'use client';

import SkillIcon from '@/app/components/skillIcon';
import { JobTypeEnum, TechSkillIdEnum } from '@/app/core/types/data';
import JobTypeGradientBox from './jobTypeGradientBox';

function JobAvatar({
  jobType,
  mainSkillId,
}: {
  jobType: JobTypeEnum;
  mainSkillId?: TechSkillIdEnum;
}) {
  return (
    <div>
      <JobTypeGradientBox
        jobType={jobType}
        className="flex h-24 w-24 items-center justify-center rounded-xl md:h-32 md:w-32"
      >
        {mainSkillId && (
          <SkillIcon
            skillId={mainSkillId}
            className="h-14 w-14 opacity-20 md:h-20 md:w-20"
          />
        )}
      </JobTypeGradientBox>
    </div>
  );
}

export default JobAvatar;
