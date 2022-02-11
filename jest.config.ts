import type { Config } from "@jest/types"
import preset from "jest-preset"

const config: Config.InitialOptions = {
  preset: "blitz",
  coverageThreshold: preset.coverageThreshold,
}

export default config
