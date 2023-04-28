export type StatsResult = {
  min: number;
  max: number;
  numOfElements: number;
  avg: number;
};

export class StatsCalculator {
  private getMinValue(numbers: number[]): number {
    let minValue = 0;

    if (this.checkNumbersLength(numbers)) {
      return -1;
    }

    numbers.forEach((number) => {
      if (!minValue) minValue = number;
      if (number < minValue) minValue = number;
    });

    return minValue;
  }

  private getMaxValue(numbers: number[]): number {
    let maxValue = 0;

    if (this.checkNumbersLength(numbers)) {
      return -1;
    }

    numbers.forEach((number) => {
      if (!maxValue) maxValue = number;
      if (number > maxValue) maxValue = number;
    });

    return maxValue;
  }

  private getNumOfElements(numbers: number[]): number {
    if (this.checkNumbersLength(numbers)) {
      return -1;
    }

    return numbers.length;
  }

  private getAvgValue(numbers: number[]): number {
    if (this.checkNumbersLength(numbers)) {
      return -1;
    }

    let sum = 0;

    numbers.forEach((number) => {
      sum += number;
    });

    return sum / numbers.length;
  }

  private checkNumbersLength(numbers: number[]): boolean {
    return numbers.length === 0;
  }

  processStats(numbers: number[]): StatsResult {
    return {
      min: this.getMinValue(numbers),
      max: this.getMaxValue(numbers),
      numOfElements: this.getNumOfElements(numbers),
      avg: this.getAvgValue(numbers),
    };
  }
}
