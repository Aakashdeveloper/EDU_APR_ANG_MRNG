# EDU_APR_ANG_MRNG

https://code.visualstudio.com/
https://nodejs.org/en/
https://github.com/
https://git-scm.com/downloads

packages

npmjs.com

JSON
Javascript object notation
[
    {
        name:"john",
        class:"ui"
    },
    {
        name:"bill",
        class:"Ai"
    }
]

package.JSON

local package
global package

/********************************
   Step to create package.JSON
********************************/

step1> npm init
step2>  Answer the question
{
  "name": "myapp",
  "version": "1.0.0",
  "description": "this is about the packge",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "node",
    "angular"
  ],
  "author": "Edureka",
  "license": "ISC"
}
step 3> yes and hit enter

/****************************
    Step to install package locally
******************************/

npm install @aakashdeveloper/create-node-app

/****************************
    Step to install package globaly
******************************/

npm install -g @angular/cli

> for win run cmd as admin
npm install -g @angular/cli

> for mac use sudo
sudo npm install -g @angular/cli

to start application or build the

/******************************
    Step to setup angular
******************************/
step 1 > npm install -g @angular/cli
setp 2 > create a folder for app
setp 3 > go inside the folder
setp 4 > ng new firstapp  
after that press enter 2 times
step 5 > cd firstapp
step 6 > npm start
step 7 > http://localhost:4200

/************************
    Command to Start app
************************/
Step 1> Go inside the folder
Step 2> npm start/ng serve/ng serve --port 8800

/*********************************
    Building Block of Angular
*********************************/
Name       |    Description                          |  Import
----------------------------------------------------------------
Module     => All Declarations done here             => NgModule       
Component  => That contains html, css and your logic => Component
Pipe       => Help to do run time data change        => Pipe, Pipetransform
Service    => That connect to third party or api's   => Injectable
Routing    => To manage the pages  and menubar       => NgModule

> One Main Module
> One Main Component


/*********************************
   Step to create first Component
*********************************/

Step 1> Make main module file (app.module.ts)
Step 2> Make main component file (app.component.ts)
Step 3> Declare main component in app.module.ts 
        in bootstrap and Declarations array
step 4> Add selector name of component in index.html inside body


/*********************************
   File Description
*********************************/

Name             | Importance  |      Description
tslint.json         imp        => Angular Standerd to write code 
tsconfig.json       imp        => Help to transpile .ts => .js
Readme.md           not imp    => Description or step for application
package.json        imp        => contains Description and package name and start commands
package-lock.json   not imp    => Child depedency 
angular.json        imp        => All paths and Standerd of my app 
.gitignore          not imp    => This will not let thing to push on git
.editorconfig       not imp    => Same code Standerd accros the team
------------------------
src> 
app             | imp         => All app building happen in this folder
assets          | not imp     => All static thing like images, css
environments    | imp         => Specify which imp app is building
browserlist     | imp         => list of browsers
favicon         | imp         => icon in the title of website
index.html      | imp         => Main html file
main.ts         | imp         => main file which tell which module is main module
style.css       | not imp     => to implement any style accros the app

/*********************************
   Flow of the app
*********************************/

angular.json => src/main.ts => scr/app.module.ts => src/app.component.ts
      
