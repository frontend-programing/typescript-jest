import { test } from '@jest/globals';
import fetchPostsList from '../fetch';
import events from '../events';

test('fetchPostsList中的回调函数应该能够被调用 ', async () => {
  const mockFn = jest.fn();
  await fetchPostsList(mockFn);

  /**
   * 普通的回调传入请求函数中没法参加jest的测试流程，要想参加就必须使用jest自己mock的回调去当作请求的回调
   */
  expect(mockFn).toBeCalled();
});

/**
 * 不能注释底下的jest.mock('../fetch')
 * 一个自定义函数被其他模块使用到，如果想测试其他模块是否使用到这个函数，为了记录调用情况，需要先用jest.mock先包装一下该函数
 */

jest.mock('../fetch');
test.only('mock 整个 fetch.js模块', async () => {
  await events.getPostList();

  expect(fetchPostsList).toBeCalled();
  expect(fetchPostsList).toBeCalledTimes(1);
});
