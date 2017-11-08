
if (!global._babelPolyfill) {
  require('babel-polyfill');
}

export const hello = (event, context, callback) => {

  const greeting = 'Hello Whirled';
  const message = `Go Serverless Webpack: ${greeting}`;
  console.log(greeting);
  console.log(message);
  console.log(event);
  console.log(context);

  callback(null, message);
};
