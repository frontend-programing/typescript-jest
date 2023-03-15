import { describe, expect, test } from '@jest/globals';

const timout = (fn: (...args: any[]) => void) => {
  setTimeout(() => {
    fn();
  }, 3000);
};

describe('timer', () => {
  test('test timer', () => {
    jest.useFakeTimers();
    const fn = jest.fn();

    timout(fn);

    jest.runAllTimers();

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
