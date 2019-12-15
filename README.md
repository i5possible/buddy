# Buddy

Buddy will grow with you all the way!

## Micro Habit

### Habit Lists

### Manage Habit
- Add
- Delete
- Daily/Weekly/Monthly Attendance
- Tag

## Memory Helper
- TODOs
- Learn: 
  - How to learn
  - How to review
  - Forgetting curve: when to memory again

## Daily Recorder
- Record the efficient time
- Generate report

## Principle Builder
- Record the principle proposed by yourself
- Vote for the principle once you used and record the fact

## Analytic

## How to run
install json-server as mock backend
```
sudo npm install -g json-server
```

run json-server use mock data
```
json-server --watch db.json --port 3001
```

use online mock data, this use the db.json data.
```
https://my-json-server.typicode.com/i5possible/buddy/
```

install yarn
```
NodeJS: npm install yarn -g 

Mac: brew install yarn

[Windows](https://yarn.bootcss.com/docs/install/#windows-stable)
```

run application using yarn 

```
yarn install
yarn start
```

## CI
Using AWS Amplify as CI system and all changes to master branch will be deployed to [HERE](https://master.d144za9srm7y7t.amplifyapp.com/)

## Things will be added to this project

- SASS
- Babel
- Echarts
- Pipeline
- AWS integration: Cloudformation, S3, CloudFront

Will have a backend, could be serverless(lambda + DynamoDB/Postgres)
