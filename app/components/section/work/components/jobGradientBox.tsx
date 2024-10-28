import { workGradientColorMapping } from '@/app/core/presentation/workGradientColorMapping';
import type { Work } from '@/app/core/types/data';
import { cx } from '@emotion/css';
import { ReactNode } from 'react';

function JobGradientBox({
  work,
  className,
  children,
}: {
  work: Work;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cx(workGradientColorMapping(work), className)}>
      {children}
    </div>
  );
}

export default JobGradientBox;
