'use client';
import { TechSkillTypeEnum, TechSkills, Work } from '@/app/core/types/data';
import Frame from '../frame';
import { cx } from '@emotion/css';
import SkillIcon from './components/skillIcon';

function TechStacks({ stacks, work }: { stacks: TechSkills; work: Work }) {
  const currentlyUsedSkill = work
    .reverse()[0]
    .tagList.map((tag) => tag.toLowerCase());
  const stacksWithMarked = stacks.map((stack) => {
    return {
      ...stack,
      isCurrentlyUsed: currentlyUsedSkill.includes(
        stack.skillTitle.toLowerCase(),
      )
        ? 1
        : 0,
    };
  });

  return (
    <section id="tech-stacks">
      <h3 className="mb-1 text-left text-4xl font-semibold">Tech Stacks</h3>
      <Frame>
        <div className="flex justify-between">
          {Object.values(TechSkillTypeEnum).map((skillType, key) => (
            <div key={key} className="text-center">
              <p className="text-xl font-semibold text-light first-letter:uppercase">
                {skillType}
              </p>
              {stacksWithMarked
                .filter((skill) => skill.type === skillType)
                .sort((a, b) => b.isCurrentlyUsed - a.isCurrentlyUsed)
                .map((skill, key) => (
                  <div key={key} className="flex items-center gap-2 text-sm">
                    <SkillIcon skillId={skill.skillId} />
                    <p
                      className={cx(
                        skill.isCurrentlyUsed === 1 && 'text-red-800',
                      )}
                    >
                      {skill.skillTitle}
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </Frame>
    </section>
  );
}

export default TechStacks;
