'use client';

import { WorkItem } from '@/app/core/types/data';
// import { AnimatePresence, motion } from 'framer-motion';
import { SiReact } from 'react-icons/si';
import { dateStringToMonthAndYear } from '@/app/core/function/dateStringToMonthAndYear';

function WorkCard({ work }: { work: WorkItem }) {
  const {
    jobTitle,
    dateStart,
    dateEnd,
    organization,
    // jobField,
    // skillList,
    // descriptionList,
  } = work;
  // const isDeveloperJob = jobField === 'developer';
  // const [isShowDescription, setIsShowDescription] = useState(dateEnd === '');

  // const variants = {
  //   open: { opacity: 1, x: 0, height: 'fit-content' },
  //   closed: { opacity: 0, x: 0, height: 0 },
  // };

  const getWorkPeriod = (dateStart: string, dateEnd: string) => {
    const monthAndYearStart = dateStringToMonthAndYear(dateStart);
    const monthAndYearEnd = dateStringToMonthAndYear(dateEnd) ?? 'Now';
    return `${monthAndYearStart} - ${monthAndYearEnd}`;
  };

  return (
    <div>
      <div className="flex gap-5">
        <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-primary bg-gradient-to-tr from-primary to-accent">
          <SiReact size={80} className="text-primary opacity-20" />
        </div>
        <div className="self-center">
          <h4 className="text-2xl font-bold">{jobTitle}</h4>
          <p className="text-lg font-semibold">{organization}</p>
          <p className="text-gray-400">{getWorkPeriod(dateStart, dateEnd)}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
