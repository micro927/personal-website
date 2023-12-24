import { Work } from '@/app/core/types/data';
import Card from '../card';
import { cx } from '@emotion/css';
import Button from '../button';
import { VariantEnum } from '@/app/core/types/app';
import { BiMessageSquareDetail } from 'react-icons/bi';

const MonthAndYearBadge = ({
  dateString,
  isDeveloper,
}: {
  dateString: string;
  isDeveloper: boolean;
}) => {
  const date = new Date(dateString);
  const monthAndYear = `${date.toLocaleString('en-us', {
    month: 'short',
  })}  ${date.getFullYear()}`;

  return (
    <div
      className={cx(
        'w-20 rounded-full  px-3 py-1 text-center text-xs',
        isDeveloper ? 'bg-secondary-500' : 'bg-gray-500',
      )}
    >
      {dateString === '' ? 'Now' : monthAndYear}
    </div>
  );
};

const WorkTimeBadges = ({
  dateStart,
  dateEnd,
  isDeveloper = false,
}: {
  dateStart: string;
  dateEnd: string;
  isDeveloper?: boolean;
}) => {
  return (
    <div className="flex items-center font-semibold">
      <MonthAndYearBadge isDeveloper={isDeveloper} dateString={dateStart} />
      <div
        className={cx(
          'h-[3px] w-6',
          isDeveloper ? 'bg-secondary-500' : 'bg-gray-500',
        )}
      />
      <MonthAndYearBadge isDeveloper={isDeveloper} dateString={dateEnd} />
    </div>
  );
};

function Work({ work }: { work: Work }) {
  return (
    <section>
      <h3 className="text-right text-4xl font-semibold">Work Experience</h3>

      <div className="flex w-full flex-col gap-2 rounded-xl">
        {work
          .reverse()
          .map(
            (
              { jobTitle, dateStart, dateEnd, organization, jobField, tagList },
              key,
            ) => {
              const isDeveloperJob = jobField === 'developer';

              return (
                <Card key={key}>
                  <div className="group flex cursor-pointer items-center justify-between overflow-hidden">
                    <div>
                      <h5
                        className={cx(
                          isDeveloperJob ? 'text-2xl' : 'text-lg text-gray-500',
                          'font-medium',
                        )}
                      >
                        {jobTitle}
                      </h5>
                      <p
                        className={cx(
                          isDeveloperJob
                            ? 'text-primary-500'
                            : 'text-sm text-gray-500',
                          'font-medium',
                        )}
                      >
                        {organization}
                      </p>
                    </div>
                    <div
                      className={cx(
                        'flex translate-x-12   items-center gap-3 transition delay-75 duration-300',
                        isDeveloperJob && 'group-hover:translate-x-0',
                      )}
                    >
                      <div className="flex flex-col items-center justify-center gap-3">
                        <div className="flex flex-col items-end justify-center gap-1">
                          <WorkTimeBadges
                            dateStart={dateStart}
                            dateEnd={dateEnd}
                            isDeveloper={isDeveloperJob}
                          />
                          {isDeveloperJob && (
                            <div className="text-xs text-gray-500">
                              {tagList.join(' · ')}
                            </div>
                          )}
                        </div>
                      </div>
                      <div>
                        <Button
                          variant={VariantEnum.ACCENT}
                          className={cx(
                            '!rounded-full !py-4 text-sm',
                            !isDeveloperJob &&
                              'cursor-auto bg-gray-500 hover:bg-gray-500',
                          )}
                          disabled={!isDeveloperJob}
                        >
                          <BiMessageSquareDetail />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            },
          )}
      </div>
    </section>
  );
}

export default Work;
