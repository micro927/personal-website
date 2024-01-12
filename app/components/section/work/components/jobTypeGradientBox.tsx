import { JobTypeEnum } from '@/app/core/types/data';
import { cx } from '@emotion/css';
import { ReactNode } from 'react';

function JobTypeGradientBox({
  jobType,
  className,
  children,
}: {
  jobType: JobTypeEnum;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cx(
        jobType === JobTypeEnum.FRONTEND &&
          'bg-gradient-to-tr from-primary to-accent text-primary',
        jobType === JobTypeEnum.FULLSTACK &&
          'bg-gradient-to-br from-primary to-secondary text-secondary',
        jobType === JobTypeEnum.NONE &&
          'bg-gradient-to-t from-slate-500 to-gray-300',
        className,
      )}
    >
      {children}
    </div>
  );
}

export default JobTypeGradientBox;
