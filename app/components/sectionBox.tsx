import { cx } from '@emotion/css';
import { CSSProperties, ReactNode } from 'react';
import { CONTENT_MAX_WIDTH } from '../core/constant';

function SectionBox({
  id,
  children,
  className,
  coloredBackground = false,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  coloredBackground?: boolean;
}) {
  const style: CSSProperties = {
    maxWidth: CONTENT_MAX_WIDTH,
  };
  return (
    <section
      id={id}
      className={cx(
        'flex w-screen justify-center',
        className,
        coloredBackground && 'bg-slate-50',
      )}
    >
      <div style={style} className="w-full px-10 py-9 md:px-4 md:py-20">
        {children}
      </div>
    </section>
  );
}

export default SectionBox;
