module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
  },
  testMatch: ['**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'],
  testEnvironment: 'jsdom',
  setupFiles: ['./jest.setup.js'], // Configurazione opzionale, se hai file di setup
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Supporta gli alias @/src
  },
};
