import dayjs from 'dayjs';

export const getCalMonth = () => {
  let currentMonth = dayjs().startOf('month');
  const endOfMonth = dayjs().endOf('month');
  const month = [];

  while (currentMonth.isBefore(endOfMonth) || currentMonth.isSame(endOfMonth, 'day')) {
    month.push(currentMonth);
    currentMonth = currentMonth.add(1, 'day');
  }

  return month.map(day => dayjs(day)); // Convert each date to Day.js object
};
