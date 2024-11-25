// jest.config.js
module.exports = {
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest', // Используем babel-jest для обработки файлов .js и .jsx
    },
    testEnvironment: 'jsdom', // Сетап среды для тестов (jsdom имитирует работу с браузером)
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Подключаем дополнительные matchers от jest-dom
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'], // Какие файлы будем использовать
  };
  