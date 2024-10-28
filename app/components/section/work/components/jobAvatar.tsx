'use client';

import SkillIcon from '@/app/components/skillIcon';
import { TechSkillIdEnum, type Work } from '@/app/core/types/data';
import JobGradientBox from './jobGradientBox';

function JobAvatar({
  work,
  mainSkillId,
}: {
  work: Work;
  mainSkillId?: TechSkillIdEnum;
}) {
  return (
    <div>
      <JobGradientBox
        work={work}
        className="flex h-24 w-24 items-center justify-center rounded-xl md:h-32 md:w-32"
      >
        {mainSkillId && (
          <SkillIcon
            skillId={mainSkillId}
            className="h-14 w-14 opacity-20 md:h-20 md:w-20"
          />
        )}
      </JobGradientBox>
    </div>
  );
}

export default JobAvatar;
