# historic-points AKA Ludoteca



## About <a name = "about"></a>

Im trying to index my family's table top games and record our high scores and victories! while im practicing React 😄




## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

 - Nodejs 20+
 - Vercel Cli
 - Ask for access to vercel project
 - Install Biomejs on vscode for linting

### Installing

A step by step series of examples that tell you how to get a development env running.

- Clone project
- ```
npm install
```
-```
npm run dev
``` or ```
vercel dev
```
### Deploying

Commits to the main branch will trigger a vercel deployment, for now we are just working on Mian

## Techlog

Everything good so far, learned about the react router.
Trying biome to lint, ask for settings for vscode


### Troubleshooting
#### 08/08/2024
So, fort promblem came when trying to connect react to consume Vercel's postgre store, it happens that it requires ``` proccess.env ``` to work. In your JavaScript code, you can access these environment variables using ```process.env.REACT_APP_*```. However, ```process.env``` is not available in the browser directly because it's a Node.js feature.

Because of this I decided to move to a serverless function to connect to the database, 