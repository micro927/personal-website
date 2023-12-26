import { ReactNode } from 'react';

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl bg-gray-100 bg-opacity-10 p-5 bg-blend-saturation shadow-xl">
      {children}
    </div>
  );
}

export default Card;
