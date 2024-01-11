export const getDifferenceMonth = (dateStart: Date, dateEnd: Date) => {
  const yearCount = dateEnd.getFullYear() - dateStart.getFullYear();
  let monthCount;
  monthCount = yearCount * 12;
  monthCount -= dateStart.getMonth();
  monthCount += dateEnd.getMonth();

  return monthCount;
};

export const dateStringToMonthAndYearString = (dateString: string) => {
  if (dateString === '') return undefined;
  const date = new Date(dateString);
  return `${date.toLocaleString('en-us', {
    month: 'long',
  })}  ${date.getFullYear()}`;
};

export const dateStringPeriodToMonthAndYearPeriod = (
  dateStart: string,
  dateEnd: string,
) => {
  const monthAndYearStart = dateStringToMonthAndYearString(dateStart);
  const monthAndYearEnd = dateStringToMonthAndYearString(dateEnd) ?? 'Now';
  return `${monthAndYearStart} - ${monthAndYearEnd}`;
};

export const dateStringPeriodToDurationObject = (
  dateStart: string,
  dateEnd: string,
) => {
  const monthsCount = getDifferenceMonth(
    new Date(dateStart),
    dateEnd === '' ? new Date() : new Date(dateEnd),
  );

  const year = Math.floor(monthsCount / 12);
  const month = monthsCount % 12;

  return {
    year,
    month,
  };
};
