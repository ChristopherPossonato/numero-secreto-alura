const path = require('path');

module.exports = {
  mode: 'development',
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
        "path": require.resolve("path-browserify"),
        "stream": require.resolve("stream-browserify"),
        "util": require.resolve("util/"),
        "buffer": require.resolve("buffer/"),
        "querystring": require.resolve("querystring-es3"),
        "fs": false ,
        "http": require.resolve("stream-http"),
        "net": false,
        "zlib": require.resolve("browserify-zlib"),
        "crypto": require.resolve("crypto-browserify"),
        "assert": require.resolve("assert/"),
        "vm": require.resolve("vm-browserify"),
        "async_hooks": require.resolve("async_hooks"),
        "async_hooks": require.resolve("raw-body")
    }
}
};
