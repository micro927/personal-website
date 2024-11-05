import { JobTypeEnum, Work } from '@/app/core/types/data';
import { dateStringPeriodToMonthAndYearPeriod } from '@/app/core/function/timeHelper';
import JobAvatar from './jobAvatar';
import { cx } from '@emotion/css';

function WorkCard({
  work,
  onClickOpenModal,
}: {
  work: Work;
  onClickOpenModal?: (work: Work) => void;
}) {
  const {
    jobTitle,
    jobType,
    dateStart,
    dateEnd,
    organization,
    country,
    skillList,
  } = work;
  const isDeveloperJob = jobType !== JobTypeEnum.NONE;
  const workPeriod = dateStringPeriodToMonthAndYearPeriod(dateStart, dateEnd);
  const openModal = () => isDeveloperJob && onClickOpenModal?.(work);

  return (
    <div
      className={cx(
        'group  flex gap-5',
        isDeveloperJob ? 'cursor-pointer' : 'cursor-auto',
      )}
      onClick={openModal}
    >
      <div
        className={cx(
          isDeveloperJob &&
            'transition duration-300 ease-out group-hover:scale-[1.03]',
        )}
      >
        <JobAvatar work={work} mainSkillId={skillList[0]} />
      </div>
      <div
        className={cx(
          'flex flex-col gap-1 self-center font-semibold',
          !isDeveloperJob && '!text-gray-400',
        )}
      >
        <div>
          <h4
            className={cx(
              'text-lg font-bold md:text-2xl',
              !isDeveloperJob && '!text-gray-400',
            )}
          >
            {jobTitle}
          </h4>
          <p className="text-sm md:text-lg">{organization}</p>
          <p className="text-xs md:text-sm">{country}</p>
        </div>
        <p className="text-xs md:text-sm">{workPeriod}</p>
      </div>
    </div>
  );
}

export default WorkCard;
