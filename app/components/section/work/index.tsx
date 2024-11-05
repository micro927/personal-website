'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';
import { TechSkill, type Work } from '@/app/core/types/data';
import { onboardingMessageItem } from '@/app/core/presentation/onboardingMessageItem';
import WorkCard from './components/workCard';
import SectionBox from '../../sectionBox';
import { OnboardingMessageContext } from '../../onboardingMessageProvider';
import { MotionVariantEnum } from '@/app/core/types/app';
import createShowAndHideMotionVariants from '@/app/core/function/createShowAndHideMotionVariants';
import WorkModal from './components/workModal';

function Work({
  works,
  techSkills,
}: {
  works: Work[];
  techSkills: TechSkill[];
}) {
  const [sortedWorks, setSortedWorks] = useState<Work[]>([]);
  const { setMessage } = useContext(OnboardingMessageContext);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalWork, setModalWork] = useState<Work>(works[0]);
  const [modalWorkTechSkills, setModalWorkTechSkills] = useState<TechSkill[]>(
    [],
  );
  const { work } = onboardingMessageItem;
  const triggerRef = useRef(null);
  const isInView = useInView(triggerRef, {
    once: true,
    margin: '-200px',
  });
  const openModal = (work: Work) => {
    setModalWork(work);
    setModalWorkTechSkills(() => {
      return work.skillList.map(
        (techSkillId) =>
          techSkills.findLast(
            (techSkill) => techSkill.skillId === techSkillId,
          ) as TechSkill,
      );
    });
    setIsOpenModal(true);
  };
  const closeModal = () => setIsOpenModal(false);

  const workCardContainerVariants = createShowAndHideMotionVariants({
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  });

  const workCardVariants = createShowAndHideMotionVariants({
    show: {
      x: 0,
      transition: { duration: 0.3 },
    },
    hidden: {
      x: 50,
    },
  });

  useEffect(() => {
    setSortedWorks(works.sort((a, b) => b.jobNo - a.jobNo));
    if (isInView) {
      setMessage(work);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <SectionBox id="work" coloredBackground>
      <div className="flex flex-col gap-10">
        <div>
          <h3 className="text-3xl font-bold">Work experience</h3>
        </div>
        <hr />
        <motion.div
          variants={workCardContainerVariants}
          initial={MotionVariantEnum.HIDDEN}
          whileInView={MotionVariantEnum.SHOW}
          viewport={{ once: true }}
          className="flex w-full flex-col gap-6"
          ref={triggerRef}
        >
          {sortedWorks.map((work, key) => (
            <motion.div key={key} variants={workCardVariants}>
              <WorkCard work={work} onClickOpenModal={openModal} />
            </motion.div>
          ))}
        </motion.div>
        <WorkModal
          work={modalWork}
          techSkills={modalWorkTechSkills}
          isOpen={isOpenModal}
          onClose={closeModal}
        />
      </div>
    </SectionBox>
  );
}

export default Work;
