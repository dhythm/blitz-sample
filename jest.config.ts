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
  coverageDirectory: "coverage/all",
}

export default config
