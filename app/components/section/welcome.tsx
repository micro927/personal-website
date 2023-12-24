'use client';
import { PersonalInformation } from '@/app/core/types/data';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ContactIcon from '../contactIcon';
import { ContactIconEnum } from '@/app/core/types/icon';
import { additionalSubtitleList } from '@/app/core/welcomeAdditionalSubtitleList';

function Welcome({
  personalInformation,
}: {
  personalInformation: PersonalInformation;
}) {
  const { name, surname, mainJobTitle, nickname } = personalInformation;
  const fullName = `${name} ${surname}`;
  const subtitleList = [mainJobTitle, ...additionalSubtitleList, nickname];

  const [displaySubtitle, setDisplaySubtitle] = useState(mainJobTitle);

  const changeDisplaySubtitleWithTypingAnimation = (newDisplayName: string) => {
    setDisplaySubtitle('');
    newDisplayName.split('').map((letter, index) => {
      setTimeout(
        () => setDisplaySubtitle((prev) => prev.concat(letter)),
        index * 60,
      );
    });
  };

  useEffect(() => {
    const displayInterval = setInterval(() => {
      const subtitleIndex = subtitleList.findIndex(
        (subtitle) => subtitle === displaySubtitle,
      );
      changeDisplaySubtitleWithTypingAnimation(
        subtitleList?.[subtitleIndex + 1] ?? subtitleList[0],
      );
    }, 3000);
    return () => clearInterval(displayInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displaySubtitle]);

  return (
    <section className="flex h-screen w-full items-center md:h-[95vh]">
      <div className="flex w-full flex-col">
        <div className="group flex w-full select-none items-center justify-between">
          <div className="flex flex-col gap-4">
            <div className=" bg-light bg-gradient-to-b from-light from-65% to-secondary-200 bg-clip-text">
              <h1 className="text-7xl font-medium text-transparent shadow-lg">
                {fullName}
              </h1>
            </div>
            <h2 className="text-3xl text-primary-500">{displaySubtitle}</h2>
          </div>
          <div>
            <div className="relative h-48 w-48 ">
              <div className="absolute h-36 w-36 translate-x-8 translate-y-8 rounded-full bg-accent-500 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-[160%]" />
              <div className="absolute h-36 w-36 select-none overflow-clip rounded-full bg-primary-500 transition-transform duration-200 group-hover:scale-150">
                <Image
                  src="/micro.png"
                  alt="micro"
                  width={135}
                  height={203}
                  priority
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          {Object.values(ContactIconEnum).map((icon, key) => (
            <ContactIcon
              key={key}
              icon={icon}
              link={personalInformation[icon]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Welcome;
