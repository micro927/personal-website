'use client';

import SkillIcon from '@/app/components/skillIcon';
import { JobTypeEnum, TechSkillIdEnum } from '@/app/core/types/data';
import { cx } from '@emotion/css';

function JobAvatar({
  jobType,
  mainSkillId,
}: {
  jobType: JobTypeEnum;
  mainSkillId?: TechSkillIdEnum;
}) {
  return (
    <div>
      <div
        className={cx(
          'flex h-24 w-24 items-center justify-center rounded-xl md:h-32 md:w-32',
          jobType === JobTypeEnum.FRONTEND &&
            'bg-gradient-to-tr from-primary to-accent text-primary',
          jobType === JobTypeEnum.FULLSTACK &&
            'bg-gradient-to-br from-primary to-secondary text-secondary',
          jobType === JobTypeEnum.NONE &&
            'bg-gradient-to-t from-slate-500 to-gray-300',
        )}
      >
        {mainSkillId && (
          <SkillIcon
            skillId={mainSkillId}
            className="h-14 w-14 opacity-20 md:h-20 md:w-20"
          />
        )}
      </div>
    </div>
  );
}

export default JobAvatar;
