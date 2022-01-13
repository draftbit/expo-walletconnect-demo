const crypto = require.resolve("crypto-browserify");
const url = require.resolve("url/"); // is forward slash (/) required?

module.exports = {
  resolver: {
    extraNodeModules: {
      crypto,
      url,
      fs: require.resolve("expo-file-system"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      net: require.resolve("react-native-tcp"),
      os: require.resolve("os-browserify/browser.js"), // is .js extension required?
      path: require.resolve("path-browserify"),
      stream: require.resolve("readable-stream"),
      vm: require.resolve("vm-browserify"),
    },
  },
};
