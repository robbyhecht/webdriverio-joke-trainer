# WebdriverIO Test Suite for Joketrainer.com

## What is Joke Trainer?
joketrainer.com is a website dedicated to helping the world remember the jokes they love. 

## What does this test suite do?

This suite checks all essential functionalities of the site including authentication, using the jokes, adding them to their collection of favorites, training with the jokes and adding their own, ensuring that user's jokes are integrating into the existing library correctly.

### Joketrainer.com is a live site, so to run this test suite simply clone the repo to your machine and install the necessary dependencies.

- Node.js, at least v12.16.1 or higher
- The WebdriverIO CLI
- Mocha.js, Chai.js and Chai-WebdriverIO, Babel

### To check your node version, run the command:

``` 
node -v
```
### To install the WebdriverIO CLI:

```
npm i --save-dev @wdio/cli
```

### To install mocha, chai and chai-webdriverio:

```
npm install --save-dev mocha chai chai-webdriverio
```

### To install babel:

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register
```

### You can get more information about setting up WebdriverIO on their official site webdriver.io/docs

## You'll also need to create a test data file to feed in a unique username and password.

First, go to joketrainer.com and register a new user account. Make sure to remember your username and password. Also be sure to not add any of your own jokes to the site or add any jokes to your favorites before running the tests. The way this suite is currently written relies on the example user being a new user for testing the favorites and add a joke functionalities.

### Once you've created a user, make sure you're in the jt_webdriverio folder and run the following command:

```
touch td.js
```

Open that file in your CODE EDITOR (not the command line) and copy in this code, replacing YOUR USERNAME and YOUR PASSWORD with the appropriate credentials (Don't delete the quotations).

```
export const username = 'YOUR USERNAME'
export const password = 'YOUR PASSWORD'
```

## You can run the tests with the terminal command:

```
npm run test
```

