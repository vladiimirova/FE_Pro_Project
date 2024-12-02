module.exports = {
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest', // Используем ts-jest для обработки TypeScript и JavaScript файлов
  },
  testEnvironment: 'jsdom', // Сетап среды для тестов (jsdom для имитации браузера)
  setupFilesAfterEnv: ['<rootDir>/setupTests.tsx'], // Подключаем дополнительные matchers от jest-dom
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Добавляем расширения TypeScript
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js|jsx)', '**/?(*.)+(spec|test).+(ts|tsx|js|jsx)'], // Указываем паттерны для тестов
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // Используем ваш tsconfig для проверки типов
    },
  },
};
