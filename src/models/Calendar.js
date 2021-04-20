import range from 'lodash.range';

export const getMonth = (year, monthIndex) => {
  const month = [new Date(year, monthIndex, 1)];

  while(new Date(year, monthIndex, month.length + 1).getMonth() === monthIndex) {
    month.push(new Date(year, monthIndex, month.length + 1));
  }

  return month;
};

export const padMonthDays = monthDates => {
  const firstDate = monthDates[0]
/**
 * [0,1,2,3,4,5,6]
 * [*]
 * [0,*]
 * [0,1,*]
 */


  return range(firstDate.getDay()).concat(monthDates);
};

export const weekdaysNames = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};
