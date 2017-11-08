# Serverless ES7 Starter

An ES7 (async/await) example using Serverless, Serverless Webpack and Serverless Offline for 
AWS Lambda and API Gateway local and remote testing.

This uses Babel to transpile the ES7 code down to Node 6.10 compliant Javascript for Lambda to execute.

## To run offline

To test your code without deploying to AWS Lambda / API Gateway

* Run `npm run start` to launch serverless offline
* Point your browser at [http://localhost:3000/hello](http://localhost:3000/hello)

## To deploy / run remotely

To deploy your code to Lambda / API Gateway

* Run `serverless deploy`
    * You may need to run `serverless configure` first or if you have `aws-cli` installed run `aws configure`
* Point your browser at HTTP Endpoint that is output to the console
