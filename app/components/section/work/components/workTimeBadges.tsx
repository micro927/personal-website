import { cx } from '@emotion/css';

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

function WorkTimeBadges({
  dateStart,
  dateEnd,
  isDeveloper = false,
}: {
  dateStart: string;
  dateEnd: string;
  isDeveloper?: boolean;
}) {
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
}

export default WorkTimeBadges;
