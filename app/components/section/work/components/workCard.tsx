import { JobTypeEnum, Work } from '@/app/core/types/data';
import {
  dateStringPeriodToDurationObject,
  dateStringPeriodToMonthAndYearPeriod,
} from '@/app/core/function/timeHelper';
import JobAvatar from './jobAvatar';
import { cx } from '@emotion/css';

function WorkCard({
  work,
  onClickOpenModal,
}: {
  work: Work;
  onClickOpenModal?: (work: Work) => void;
}) {
  const { jobTitle, jobType, dateStart, dateEnd, organization, skillList } =
    work;
  const isDeveloperJob = jobType === JobTypeEnum.NONE;
  const workPeriod = dateStringPeriodToMonthAndYearPeriod(dateStart, dateEnd);
  const { month, year } = dateStringPeriodToDurationObject(dateStart, dateEnd);
  const duration = `${year ? `${year}y ` : ``}${month}m`;
  const openModal = () => onClickOpenModal?.(work);

  return (
    <div>
      <div className="flex cursor-pointer gap-5" onClick={openModal}>
        <JobAvatar jobType={jobType} mainSkillId={skillList[0]} />
        <div
          className={cx(
            'flex flex-col gap-1 self-center font-semibold',
            isDeveloperJob && '!text-gray-400',
          )}
        >
          <div>
            <h4 className="text-lg font-bold md:text-2xl">{jobTitle}</h4>
            <p className="text-sm md:text-lg">{organization}</p>
          </div>
          <p className="text-xs md:text-sm">
            {workPeriod} ({duration})
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
