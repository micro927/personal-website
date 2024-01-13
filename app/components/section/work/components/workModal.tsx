'use client';

import Dialog from '@/app/components/dialog';
import { TechSkill, Work } from '@/app/core/types/data';
import JobTypeGradientBox from './jobTypeGradientBox';
import SkillIcon from '@/app/components/skillIcon';
import { MdOutlineClose } from 'react-icons/md';
import {
  dateStringPeriodToDurationObject,
  dateStringPeriodToMonthAndYearPeriod,
} from '@/app/core/function/timeHelper';

function WorkModal({
  work,
  techSkills,
  isOpen,
  onClose,
}: {
  work: Work;
  techSkills: TechSkill[];
  isOpen: boolean;
  onClose: () => void;
}) {
  const {
    jobTitle,
    jobType,
    skillList,
    organization,
    descriptionList,
    dateStart,
    dateEnd,
  } = work;
  const workPeriod = dateStringPeriodToMonthAndYearPeriod(dateStart, dateEnd);
  const { month, year } = dateStringPeriodToDurationObject(dateStart, dateEnd);
  const duration = `${year ? `${year} years ` : ``}${month} months`;

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      className="top-5 flex h-full max-h-[90%] w-[90%]  flex-col rounded-xl md:w-full"
    >
      <div className="h-32 overflow-hidden md:h-36">
        <JobTypeGradientBox
          jobType={jobType}
          className="w-ful flex h-full items-center justify-between text-opacity-50"
        >
          <SkillIcon
            skillId={skillList[0]}
            className="h-44 w-44 -translate-x-1/4 scale-110 opacity-20 md:h-72 md:w-72"
          />
          <button
            className="absolute right-4 top-4 rounded-xl bg-white bg-opacity-20 p-2 text-white opacity-70 shadow-sm transition duration-300 hover:bg-opacity-30 md:right-6 md:top-6"
            onClick={onClose}
          >
            <MdOutlineClose className="h-3 w-3 md:h-5 md:w-5" />
          </button>
        </JobTypeGradientBox>
      </div>
      <div className="flex flex-1 flex-col gap-10 overflow-scroll p-12">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <h4 className="text-xl font-bold md:text-2xl">{jobTitle}</h4>
            <p className="text-base font-bold md:text-lg">{organization}</p>
          </div>
          <p className="text-sm font-semibold md:text-base">
            {workPeriod} ({duration})
          </p>
        </div>
        <hr />
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="flex basis-7/12 flex-col gap-6">
            <h6 className="text-base font-bold md:text-lg">Description</h6>
            <ul className="list-disc text-sm md:text-base">
              {descriptionList.map((description, key) => (
                <li key={key} className="mb-2">
                  {description}
                </li>
              ))}
            </ul>
          </div>
          <hr className="block md:hidden" />
          <div className="flex basis-4/12 flex-col gap-6">
            <h6 className="text-base font-bold md:text-lg">Tech stacks</h6>
            <div className="flex flex-col gap-2">
              {techSkills.map(({ skillTitle, skillId }, key) => (
                <div key={key} className="flex items-center gap-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-800 text-white">
                    <SkillIcon skillId={skillId} size={16} />
                  </div>
                  <p className="text-sm">{skillTitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default WorkModal;
