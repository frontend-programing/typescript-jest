## Matchers

Jest为我们提供了不同种类的Matchers去测试我们的代码

1. 完全匹配一个简单值： 使用`toBe`
2. 完全匹配一个对象： 使用`toEqual`
3. 匹配truthiness类型的值：
   - 使用`toBeNull`完全匹配`null`
   - 使用`toBeUndefined`完全匹配`undefined`
   - 使用`toBeFalsy`匹配表达式可以计算为false的值
   - 使用`toBeDefined`完全匹配一个值确实定义了
   - 使用`toBeTruthy`匹配表达式可以计算为true的值

4. 数字类型的匹配：
   - 大于：使用`toBeGreaterThan`
   - 等于：使用`toBe`或者`toEqual`
   - 小于：使用`toBeLessThan`
   - 大于等于：使用`toBeGreaterThanOrEqual`
   - 小于等于： 使用`toBeLessThanOrEqual`
   - 接近（浮点型）： 使用`toBeCloseTo`

5. 字符串类型的匹配：
   - 包含：使用`toMatch`

6. 集合类型的匹配：
   - 拥有：使用`toContain`

7. 异常匹配：
   - 抛出：使用`toThrow`

8. 异步代码匹配：
   - Promise：then后进行同步方式的语法书写
   - Async/Await：await后进行同步方式的语法书写
   - 方便测试的异步语法:`async() => { await expect(fetchData()).resolves.toBe('x')}`
   - 使用`resolves/rejects不需要添加expect.assertions了`，详情见： [jest-pull-request-7131](https://github.com/facebook/jest/pull/7131)
