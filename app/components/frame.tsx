import { ReactNode } from 'react';

function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="group relative w-full rounded-lg ring-[6px] ring-secondary-500">
      <div className="absolute inset-0 h-full w-full -rotate-2 rounded-lg ring-[6px] ring-primary-500 transition-transform duration-150 group-hover:rotate-0" />
      <div className="w-full rounded-lg px-8 py-14 ">{children}</div>
    </div>
  );
}

export default Frame;
