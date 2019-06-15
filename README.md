[![nodejs-new-pantone-black.png](https://i.postimg.cc/cJPYRhj4/nodejs-new-pantone-black.png)](https://postimg.cc/R3QN974j)

# Node boilerplate

This is a node boilerplate to get going with building an API using node.

(Make sure you read about the environment variables below)

## < More coming soon >

## Packages

This repo is a template to get me going quicker. It takes advantage of the following packages:

### Express

This project uses [Express Generator](https://expressjs.com/en/starter/generator.html) for the application shell. I have then stripped out unnecessary folders (like `public`) and dependencies (templating libraries like `jade`).

### Linting

[No-Sweat™ Eslint and Prettier Setup](https://github.com/wesbos/eslint-config-wesbos) and related dependencies.

### Testing

This repo uses Cucumber and Chai for feature (or component) testing. I have included some starter tests.

## Setup

### Environment Variables

Before anything else, create a `.env` file at the root of your application.

**What to add to this file**

- DATABASE: Link to connect to your dev (or live) database.
- PORT: The port you'd like the app to run on.

For eg:

```env
DATABASE=mongodb://username:password@youruniquelink.com:12345/database_name
PORT=3000
```

- Clone this repo - `git clone https://github.com/nkhil/node_boilerplate.git`
- Install dependencies - `npm install`
- Run the app on a local server - `npm start`

## Testing

This repo uses Cucumber for feature/component tests.

To run the feature tests - `npm run test:feature`
