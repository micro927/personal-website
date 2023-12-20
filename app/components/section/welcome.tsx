'use client';

import { PersonalInformation } from '@/app/core/types/data';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '../button';

function Welcome({
  personalInformation,
}: {
  personalInformation: PersonalInformation;
}) {
  const { name, surname, mainJobTitle, nickname } = personalInformation;
  const fullName = `${name} ${surname}`;
  const [displayName, setDisplayName] = useState(fullName);

  useEffect(() => {
    const displayInterval = setInterval(() => {
      setDisplayName((prev) => (prev === fullName ? nickname : fullName));
    }, 5000);
    return () => clearInterval(displayInterval);
  });

  return (
    <section className="flex h-screen w-full items-center">
      <div className="flex w-full items-center justify-between">
        <div className="peer flex flex-col gap-4">
          <div className="bg-light bg-gradient-to-b from-light from-65% to-secondary-200 bg-clip-text">
            <h1 className="text-7xl font-medium text-transparent shadow-lg">
              {displayName}
            </h1>
          </div>
          <h2 className="text-3xl text-primary-500">{mainJobTitle}</h2>
          <div>
            <Button>Contact Me</Button>
          </div>
        </div>
        <div>
          <div className="peer relative h-48 w-48 ">
            <div className="absolute h-36 w-36 translate-x-8 translate-y-8 rounded-full bg-accent-500 transition-transform duration-200 peer-hover:translate-x-0 peer-hover:translate-y-0 peer-hover:scale-[160%]" />
            <div className="absolute h-36 w-36 select-none overflow-clip rounded-full bg-primary-500 transition-transform duration-200 peer-hover:scale-150">
              <Image
                src="/micro.png"
                alt="micro"
                width={135}
                height={40}
                priority
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
