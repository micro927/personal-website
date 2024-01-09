'use client';
import { PersonalInformation } from '@/app/core/types/data';
import { useEffect, useState } from 'react';
import ContactIcon from '../../contactIcon';
import { ContactIconEnum, VariantEnum } from '@/app/core/types/app';
import { additionalSubtitleList } from '@/app/core/welcomeAdditionalSubtitleList';
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
      <div className="flex w-full flex-col justify-start">
        <div className="w-full py-12">
          <div className="group flex w-full select-none items-center justify-between">
            <div className="flex flex-col gap-4">
              {/* <div className=" bg-primary to-accent from-primary bg-gradient-to-tr bg-clip-text"> */}
              <h1 className="text-7xl font-bold">{fullName}</h1>
              {/* </div> */}
              <h2 className="text-3xl font-semibold text-primary">
                {displaySubtitle}
              </h2>
            </div>
          </div>

          <div className="mt-5">
            <div>
              <Link href="#about-me">
                <Button variant={VariantEnum.SECONDARY} className="shadow-sm">
                  About me
                </Button>
              </Link>
            </div>
            <div className="mt-16 w-full text-gray-500 transition duration-150 hover:text-gray-600">
              <p className="text-justify indent-20">{aboutMe}</p>
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
