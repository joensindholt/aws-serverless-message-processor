# AWS Serverless Message Processor

Just a toy project testing out some AWS and Serverless features

## Commands

Set up credentials
```
serverless config credentials --provider aws --key {key} --secret {secret}
```
Deploy entire stack
```
serverless deploy
```
Deploy log function
```
serverless deploy function -f log
```
Invoke log function and get back logs
```
serverless invoke -f log -l
```
