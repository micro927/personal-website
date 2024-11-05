'use client';

import {
  TechSkillTypeEnum,
  TechSkill,
  TechSkillIdEnum,
} from '@/app/core/types/data';
import SkillIcon from '../../skillIcon';
import { motion, useInView } from 'framer-motion';
import { useContext, useEffect, useRef, useState } from 'react';
import SectionBox from '../../sectionBox';
import createShowAndHideMotionVariants from '@/app/core/function/createShowAndHideMotionVariants';
import { MotionVariantEnum } from '@/app/core/types/app';
import { OnboardingMessageContext } from '../../onboardingMessageProvider';

type AllSkillsByType = {
  type: TechSkillTypeEnum;
  skills: TechSkill[];
}[];

function TechStacks({
  skills,
  currentWorkSkillIdList,
}: {
  skills: TechSkill[];
  currentWorkSkillIdList: TechSkillIdEnum[];
}) {
  const { setMessage } = useContext(OnboardingMessageContext);
  const [currentWorkSkills, setCurrentWorkSkills] = useState<TechSkill[]>([]);
  const [allSkillsByType, setAllSkillsByType] = useState<AllSkillsByType>([]);
  const triggerRef = useRef(null);
  const isInView = useInView(triggerRef);

  const currentWorkSkillContainerVariants = createShowAndHideMotionVariants({
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  });

  const currentWorkSkillsVariants = createShowAndHideMotionVariants({
    show: {
      y: 0,
      transition: { duration: 0.3 },
    },
    hidden: {
      y: -20,
    },
  });

  useEffect(() => {
    if (isInView) {
      setMessage('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  useEffect(() => {
    setAllSkillsByType(() =>
      Object.values(TechSkillTypeEnum).map((skillType) => ({
        type: skillType,
        skills: skills
          .filter((skill) => skill.type === skillType)
          .sort((a, b) => b.level - a.level),
      })),
    );

    setCurrentWorkSkills(() =>
      currentWorkSkillIdList.map(
        (techSkillId) =>
          skills.findLast(
            (techSkill) => techSkill.skillId === techSkillId,
          ) as TechSkill,
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SectionBox id="tech-stacks">
      <div className="flex flex-col gap-10">
        <h3 className="text-3xl font-bold">Tech stacks</h3>
        <hr />
        <h5 className="text-sm font-semibold text-gray-500">Current work</h5>

        <motion.div
          variants={currentWorkSkillContainerVariants}
          initial={MotionVariantEnum.HIDDEN}
          whileInView={MotionVariantEnum.SHOW}
          viewport={{ once: true }}
          className="flex w-full flex-col gap-2"
        >
          {currentWorkSkills.map((skill, key) => (
            <motion.div
              key={key}
              variants={currentWorkSkillsVariants}
              className="flex items-center gap-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800 text-white">
                <SkillIcon skillId={skill.skillId} size={24} />
              </div>
              <p className="text-base md:text-lg">{skill.skillTitle}</p>
            </motion.div>
          ))}
        </motion.div>
        <hr />
        <h5 className="text-sm font-semibold text-gray-500" ref={triggerRef}>
          All Experienced skills
        </h5>
        <div className="grid w-full grid-cols-2 gap-10 md:grid-cols-3">
          {allSkillsByType.map(({ type, skills }, key) => (
            <div key={key} className="flex flex-col gap-10">
              <p className="text-sm font-semibold text-primary opacity-70 first-letter:uppercase">
                {type}
              </p>
              <div className="flex flex-col gap-4">
                {skills.map((skill, key) => (
                  <div key={key} className="flex items-center gap-2 text-sm">
                    <div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-800 text-white">
                        <SkillIcon skillId={skill.skillId} size={16} />
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm">{skill.skillTitle}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </SectionBox>
  );
}

export default TechStacks;
