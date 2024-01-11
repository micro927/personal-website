'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';
import { Work } from '@/app/core/types/data';
import { onboardingMessageItem } from '@/app/core/presentation/onboardingMessageItem';
import WorkCard from './components/workCard';
import SectionBox from '../../sectionBox';
import { OnboardingMessageContext } from '../../onboardingMessageProvider';
import { MotionVariantEnum } from '@/app/core/types/app';
import createShowAndHideMotionVariants from '@/app/core/function/createShowAndHideMotionVariants';
import WorkModal from './components/workModal';

function Work({ works }: { works: Work[] }) {
  const [sortedWorks, setSortedWorks] = useState<Work[]>([]);
  const { setMessage } = useContext(OnboardingMessageContext);
  const [isOpenModal, setIsOpenModal] = useState(true);
  const [modalWork, setModalWork] = useState<Work>(works[0]);
  const { work } = onboardingMessageItem;
  const triggerRef = useRef(null);
  const isInView = useInView(triggerRef, {
    once: true,
  });
  const openModal = (work: Work) => {
    setModalWork(work);
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
        <motion.div>
          <h3 className="text-3xl font-bold">Work experience</h3>
        </motion.div>
        <hr />
        <motion.div
          variants={workCardContainerVariants}
          initial={MotionVariantEnum.HIDDEN}
          whileInView={MotionVariantEnum.SHOW}
          viewport={{ once: true }}
          className="flex w-full flex-col gap-6"
        >
          {sortedWorks.map((work, key) => (
            <motion.div key={key} variants={workCardVariants}>
              <WorkCard work={work} onClickOpenModal={openModal} />
            </motion.div>
          ))}
        </motion.div>
        <div ref={triggerRef} />
        <WorkModal work={modalWork} isOpen={isOpenModal} onClose={closeModal} />
      </div>
    </SectionBox>
  );
}

export default Work;
