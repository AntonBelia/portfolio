module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
	preset: 'babel-jest',
  transformIgnorePatterns: [
		"/node_modules/(?!(msw)/)",
    '/node_modules/',
  ],
};