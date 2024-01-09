'use client';

import { TechSkillTypeEnum, TechSkills, Work } from '@/app/core/types/data';
import SkillIcon from './components/skillIcon';
// import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SectionBox from '../../sectionBox';

type AllSkillsByType = {
  type: TechSkillTypeEnum;
  skills: TechSkills;
}[];

function TechStacks({ skills, work }: { skills: TechSkills; work: Work }) {
  const [currentWorkSkills, setCurrentWorkSkills] = useState<TechSkills>([]);
  const [allSkillsByType, setAllSkillsByType] = useState<AllSkillsByType>([]);

  useEffect(() => {
    setAllSkillsByType(() =>
      Object.values(TechSkillTypeEnum).map((skillType) => ({
        type: skillType,
        skills: skills
          .filter((skill) => skill.type === skillType)
          .sort((a, b) => b.level - a.level),
      })),
    );

    const currentlyWorkTagList = work
      .reverse()[0]
      .tagList.map((tag) => tag.toLowerCase());

    setCurrentWorkSkills(() =>
      skills.filter((skill) => {
        return currentlyWorkTagList.includes(skill.skillTitle.toLowerCase());
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // <motion.div
  //     initial={{ opacity: 0 }}
  //     whileInView={{ opacity: 1 }}
  //     transition={{
  //       duration: 1,
  //     }}
  //     viewport={{ once: true }}

  return (
    <SectionBox id="tech-stacks">
      <div className="flex flex-col gap-10">
        <h3 className="text-3xl font-bold">Tech stacks</h3>
        <hr />
        <h5 className="text-sm font-semibold text-gray-500">Current work</h5>
        <div className="flex w-full flex-col gap-2">
          {currentWorkSkills.map((skill, key) => (
            <div key={key} className="flex items-center gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800 text-white">
                <SkillIcon skillId={skill.skillId} size={24} />
              </div>
              <p className="text-lg">{skill.skillTitle}</p>
            </div>
          ))}
        </div>

        <hr />
        <h5 className="text-sm font-semibold text-gray-500">
          All Experienced skills
        </h5>
        <div className="grid w-full grid-cols-3 gap-10">
          {allSkillsByType.map(({ type, skills }, key) => (
            <div key={key} className="flex flex-col gap-10">
              <p className="text-sm font-semibold text-primary opacity-70 first-letter:uppercase">
                {type}
              </p>
              <div className="flex flex-col gap-4">
                {skills.map((skill, key) => (
                  <div key={key} className="flex items-center gap-2 text-sm">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-800 text-white">
                      <SkillIcon skillId={skill.skillId} size={16} />
                    </div>
                    <p className="text-sm">{skill.skillTitle}</p>
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
