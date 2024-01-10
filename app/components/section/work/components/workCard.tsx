import { JobTypeEnum, Work } from '@/app/core/types/data';
// import { AnimatePresence, motion } from 'framer-motion';
import { dateStringToMonthAndYear } from '@/app/core/function/dateStringToMonthAndYear';
import JobAvatar from './jobAvatar';
import { cx } from '@emotion/css';

function WorkCard({ work }: { work: Work }) {
  const {
    jobTitle,
    jobType,
    dateStart,
    dateEnd,
    organization,
    skillList,
    // jobField,
    // skillList,
    // descriptionList,
  } = work;
  const isDeveloperJob = jobType === JobTypeEnum.NONE;
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
        <JobAvatar jobType={jobType} mainSkillId={skillList[0]} />
        <div className="self-center">
          <h4
            className={cx(
              'text-lg font-bold md:text-2xl',
              isDeveloperJob && 'text-gray-400',
            )}
          >
            {jobTitle}
          </h4>
          <p
            className={cx(
              'text-sm font-semibold md:text-lg',
              isDeveloperJob && 'text-gray-400',
            )}
          >
            {organization}
          </p>
          <p className="text-xs text-gray-400 md:text-base">
            {getWorkPeriod(dateStart, dateEnd)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
