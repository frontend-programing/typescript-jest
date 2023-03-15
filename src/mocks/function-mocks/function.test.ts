import { test, expect } from '@jest/globals';

test('mock fn return', () => {
  /**
   * 使用jest.fn API模拟一个函数实现，不传递函数实现则给定默认实现
   * 默认的实现返回值是undefined
   */
  const mockFn = jest.fn();
  mockFn.mockReturnValue('return value');
  const result = mockFn(1, 2);
  expect(mockFn).toBeCalled();
  expect(mockFn).toBeCalledTimes(1);
  expect(mockFn).toBeCalledWith(1, 2);
  expect(mockFn).toReturnWith('return value');
});

test('mock sync fn', () => {
  const syncFn = jest.fn((a: number, b: number) => {
    return a + b;
  });

  expect(syncFn(1, 2)).toBe(3);
});

test('mock async fn return', async () => {
  const asyncFn = jest.fn();
  asyncFn.mockResolvedValue('mockResolvedValue');

  await expect(asyncFn()).resolves.toBe('mockResolvedValue');
  // 断言mockFn调用后返回的是Promise对象
  expect(Object.prototype.toString.call(asyncFn())).toBe('[object Promise]');
});
