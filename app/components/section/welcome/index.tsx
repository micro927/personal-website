'use client';
import { PersonalInformation } from '@/app/core/types/data';
import { useContext, useEffect, useState } from 'react';
import ContactIcon from '../../contactIcon';
import {
  ContactIconEnum,
  MotionVariantEnum,
  VariantEnum,
} from '@/app/core/types/app';
import { additionalSubtitleList } from '@/app/core/presentation/welcomeAdditionalSubtitleList';
import Button from '../../button';
import SectionBox from '../../sectionBox';
import Link from 'next/link';
import { motion } from 'framer-motion';
import createShowAndHideMotionVariants from '@/app/core/function/createShowAndHideMotionVariants';
import { OnboardingMessageContext } from '../../onboardingMessageProvider';
import { onboardingMessageItem } from '@/app/core/presentation/onboardingMessageItem';

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
  const { setMessage } = useContext(OnboardingMessageContext);
  const { work } = onboardingMessageItem;

  const changeDisplaySubtitleWithTypingAnimation = (newDisplayName: string) => {
    setDisplaySubtitle('');
    newDisplayName.split('').map((letter, index) => {
      setTimeout(
        () => setDisplaySubtitle((prev) => prev.concat(letter)),
        index * 60,
      );
    });
  };

  const onClickToWorkButton = () => setMessage(work);

  const titleVariants = createShowAndHideMotionVariants({
    show: {
      x: 0,
      transition: { duration: 0.4 },
    },
    hidden: {
      opacity: 0.1,
      x: 10,
    },
  });

  const aboutMeVariants = createShowAndHideMotionVariants({
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hidden: {
      opacity: 0.1,
      y: -30,
    },
  });

  const containerVariants = createShowAndHideMotionVariants({
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 1,
    },
  });

  const contactIconVariants = createShowAndHideMotionVariants({
    show: {
      y: 0,
      transition: { duration: 0.3 },
    },
    hidden: {
      y: 20,
    },
  });

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
    <SectionBox id="welcome">
      <div className="flex min-h-[70vh] w-full flex-col justify-start md:h-full md:min-h-max">
        <div className="w-full py-12 md:py-8 ">
          <motion.div
            initial={MotionVariantEnum.HIDDEN}
            whileInView={MotionVariantEnum.SHOW}
            variants={titleVariants}
            viewport={{ once: true }}
            className="flex w-full select-none items-center justify-between"
          >
            <div className="flex w-full flex-col gap-4 text-center md:text-left">
              <h1 id="title" className="text-5xl font-bold md:text-7xl">
                {fullName}
              </h1>
              <h2 className=" text-xl font-semibold text-primary md:text-2xl">
                {displaySubtitle}
              </h2>
            </div>
          </motion.div>

          <motion.div
            variants={aboutMeVariants}
            initial={MotionVariantEnum.HIDDEN}
            whileInView={MotionVariantEnum.SHOW}
            viewport={{ once: true }}
            id="about-me"
            className="mt-5"
          >
            <div className="text-center md:text-left">
              <Link href="#work">
                <Button
                  variant={VariantEnum.SECONDARY}
                  onClick={onClickToWorkButton}
                  className="shadow-sm"
                >
                  About my work
                </Button>
              </Link>
            </div>
            <div className="mt-16 w-full text-gray-500 transition duration-150 hover:text-gray-600">
              <p className="text-justify indent-20 text-sm md:text-base">
                {aboutMe}
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={containerVariants}
          initial={MotionVariantEnum.HIDDEN}
          whileInView={MotionVariantEnum.SHOW}
          className="w-full"
        >
          <hr />
          <div className="mt-10 flex w-full justify-around">
            {Object.values(ContactIconEnum).map((contact, key) => (
              <motion.div key={key} variants={contactIconVariants}>
                <ContactIcon
                  icon={contact}
                  link={personalInformation[contact]}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionBox>
  );
}

export default Welcome;
