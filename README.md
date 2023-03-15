## Typescript + Jest Demo记录

1. 生成拥有`ts-jest`预设的`jest.config.js`
2. 安装相关依赖`yarn add --dev jest typescript ts-jest @types/jest`，用于支撑typescript写jest test
3. 修改`jest.config.js`为`jest.config.ts`,并安装`ts-node`使用`ts-node`用于编译`jest.config.ts`支撑jest获取该配置文件运行jest
4. 为了方便在vscode当中使用jest，也可以安装vscode jest插件