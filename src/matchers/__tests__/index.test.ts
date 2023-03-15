import { describe, expect, test } from '@jest/globals';

function sum(a: number, b: number): number {
  return a + b;
}

async function fetchData() {
  return Promise.resolve('success');
  return Promise.reject('fail');
}

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('aysnc code', () => {
  test('the fetch fails with an error', async () => {
    await expect(fetchData()).resolves.toBe('success');
    // await expect(fetchData()).rejects.toBe('fail');
    // expect.assertions(1);
    // return fetchData().catch((err) => {
    //   expect(err).toMatch(/fail/);
    // });
  });
});
