import { StatsCalculator, StatsResult } from './index';

describe('Stats calculator', () => {
  let calculator: StatsCalculator;
  let result: StatsResult;

  beforeEach(() => {
    calculator = new StatsCalculator();
    result = calculator.processStats([2, 4, 21, -8, 53, 40]);
  });

  test('should calculate the minimum value from a range of numbers', () => {
    expect(result.min).toEqual(-8);
  });

  test('should calculate the maximum value from a range of numbers', () => {
    expect(result.max).toEqual(53);
  });

  test('should calculate the number of elements in the sequence', () => {
    expect(result.numOfElements).toEqual(6);
  });

  test('should calculate the average value from a range of numbers', () => {
    expect(result.avg).toBeGreaterThanOrEqual(18);
  });
});
