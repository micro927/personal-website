import { cx } from '@emotion/css';
import { ReactNode } from 'react';

function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        'rounded-xl bg-gray-100 bg-opacity-10 p-5 bg-blend-saturation shadow-xl',
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Card;
