module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.tsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "/\.(css|scss|sass)$": "identity-obj-proxy", // <-- NO slashes at start/end
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
};
