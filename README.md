# cnn-dev-challenge

# Main Dependencies
Requires: NodeJS+NPM and GULP

NodeJS with NPM: https://nodejs.org

Gulp:  npm install -g gulp

# Obtain Source Code
Download repo.

# Install Dependencies
Create "logs" folder inside of this path in the source code: "src/server/" -- final result should be "src/server/logs"
Run "npm install" in the project root directory.

# Configuration Notes:
Change the following to match your own:

Open src/server/services/twitter.js
Locate the following and input your values:
```
twitterConfig = {
        "consumerKey" : "YOUR CONSUMER KEY",
        "consumerSecret" :"YOUR CONSUMER SECRETw",
        "accessToken" : "YOUR ACCESS TOKEN",
        "accessTokenSecret" : "YOUR ACCESS TOKEN SECRET",
        "callBackUrl" : "http://127.0.0.1"
    },
```

# Log Location
NodeJS Express Log Files are under:
src/server/logs/all-logs.log

# Starting the App
After app is configured:
Change directory to "src":
Run "gulp" without any task added to it from the command line to start the nodejs server and front-end server.
Your browser should auto launch.

# Questions?  Issues?
File an issue or email Randall Potter : RandallBPotter15@gmail.com

# Todo:
Mocha Test Assertions

