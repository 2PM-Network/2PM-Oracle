module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    // 如果你的测试文件位于特定目录，使用下面的配置
    roots: ['<rootDir>/test/', '<rootDir>/src/'],
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)']
  }
  