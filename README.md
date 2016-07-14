# cnn-dev-challenge

### Main Dependencies
* Requires: NodeJS+NPM and GULP
* NodeJS with NPM: https://nodejs.org
* Gulp:  npm install -g gulp

### Obtain Source Code
* Download repo from here via clone or zip download.

### Install Dependencies
* Create "logs" folder inside of this path in the source code: "src/server/"
* Run "npm install" in the project root directory.

### Configuration Notes:
* Change the following to match your own:
* Open src/server/services/twitter.js
* Locate the following and input your values:
```
twitterConfig = {
        "consumerKey" : "YOUR CONSUMER KEY",
        "consumerSecret" :"YOUR CONSUMER SECRETw",
        "accessToken" : "YOUR ACCESS TOKEN",
        "accessTokenSecret" : "YOUR ACCESS TOKEN SECRET",
        "callBackUrl" : "http://127.0.0.1"
    },
```

### Log Location
* NodeJS Express Log Files are under:
src/server/logs/all-logs.log

### Starting the App
_After app is configured:_
* Change directory to "src":
* Run "gulp" without any task added to it from the command line to start the nodejs server and front-end server.
* Your browser should auto launch.

### Unit Tests using Mocha
* Change directory to "src/server"
* Type "mocha"

### Questions?  Issues?  Pull Request?
* File here or email Randall Potter : RandallBPotter15@gmail.com

### Todo:
~~ Mocha Test Assertions~~

### AC / QA Test Criteria
* Load page.  I should see an input field with placeholder text and a search button.  Below that I sould see a feed showing 10 tweets based off of a default search of '@cnn'
* If the search input field is empty, the search button should be disabled.
* If I click into the search field, type, then delete my search text, the search button should still be disabled.
* If I click into the search field and type the search button should become enabled.
* When I click search the feed below the button should update to reflect my new search term.

### Future Features
* Loading indicator while tweets are loading.
* Color code input field border as it becomes invalid or valid.
