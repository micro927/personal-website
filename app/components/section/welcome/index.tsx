'use client';
import { PersonalInformation } from '@/app/core/types/data';
import { useEffect, useState } from 'react';
import ContactIcon from '../../contactIcon';
import { ContactIconEnum, VariantEnum } from '@/app/core/types/app';
import { additionalSubtitleList } from '@/app/core/presentation/welcomeAdditionalSubtitleList';
import Button from '../../button';
import SectionBox from '../../sectionBox';
import Link from 'next/link';

function Welcome({
  personalInformation,
}: {
  personalInformation: PersonalInformation;
}) {
  const { name, surname, mainJobTitle, nickname, aboutMe } =
    personalInformation;
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

  // const sectionHeightStyle: CSSProperties = {
  //   height: `calc(100vh - ${NAVBAR_HEIGHT})`,
  // };

  return (
    <SectionBox id="welcome">
      <div className="flex h-[90vh] w-full flex-col justify-start md:h-full">
        <div className="w-full py-12 md:py-8 ">
          <div className="group flex w-full select-none items-center justify-between">
            <div className="flex w-full flex-col gap-4 text-center md:text-left">
              <h1 id="title" className="text-5xl font-bold md:text-7xl">
                {fullName}
              </h1>
              <h2 className=" text-xl font-semibold text-primary md:text-2xl">
                {displaySubtitle}
              </h2>
            </div>
          </div>

          <div id="about-me" className="mt-5">
            <div className="text-center md:text-left">
              <Link href="#work">
                <Button variant={VariantEnum.SECONDARY} className="shadow-sm">
                  About my work
                </Button>
              </Link>
            </div>
            <div className="mt-16 w-full text-gray-500 transition duration-150 hover:text-gray-600">
              <p className="text-justify indent-20 text-sm md:text-base">
                {aboutMe}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <hr />
          <div className="mt-10 flex w-full justify-around">
            {Object.values(ContactIconEnum).map((contact, key) => (
              <ContactIcon
                key={key}
                icon={contact}
                link={personalInformation[contact]}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionBox>
  );
}

export default Welcome;
