import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  preset: "blitz",
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  collectCoverageFrom: ["<rootDir>/app/pages/**/*.{ts,tsx}"],
  coverageDirectory: "coverage/pages",
}

export default config
