import { BlitzConfig, sessionMiddleware, simpleRolesIsAuthorized } from "blitz"

const config: BlitzConfig = {
  middleware: [
    sessionMiddleware({
      cookiePrefix: "blitz-sample",
      isAuthorized: simpleRolesIsAuthorized,
    }),
  ],
  // Uncomment this to customize the webpack config
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    // config.plugins.push(new webpack.IgnorePlugin(/jest\.config\.ts/))
    return config
  },
}
module.exports = config
