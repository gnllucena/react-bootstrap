module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(scss|sass|css)$": "identity-obj-proxy"
  },
  reporters: [ 
    "default", 
    [ 
      "jest-junit", {
        suiteNameTemplate: "{filepath}",
        outputName: "junit.xml",
        outputDirectory: "./coverage",
      } 
    ]
  ],
  coverageReporters: [
    "text",
    "cobertura"
  ],
  testResultsProcessor: "jest-junit",
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
  ]
};