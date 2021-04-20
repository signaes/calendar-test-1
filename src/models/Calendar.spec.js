import { getMonth, padMonthDays } from './Calendar';

describe('getMonth', () => {
  it('should return an array with days in the passed in monthIndex an year', () => {
    expect(getMonth(2021, 1)).toHaveLength(28);
    expect(getMonth(2021, 3)).toHaveLength(30);
  });
});

describe('padMonthDays', () => {
  expect(padMonthDays(getMonth(2021, 1))).toHaveLength(28 + 1);
  expect(padMonthDays(getMonth(2021, 3))).toHaveLength(30 + 4);
});
