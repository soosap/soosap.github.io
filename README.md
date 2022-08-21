# React Coding Workshop 2022
## UKI Coding School

### Chapter 1: Tooling

* Install **Visual Studio Code**
* Install **Github Desktop**
* Install **node.js**

```sh
$ node --version
# Must be larger than v14.0
```

### Chapter 2: Create React App

```sh
$ npm uninstall -g create-react-app
$ which create-react-app
> create-react-app not found

$ npx create-react-app personal-website --template typescript
$ cd personal-website
$ npm start
```

### Chapter 3: GitHub Version Control

* Login to your Github account. If you do not have one yet, create one.
* Click on the + icon to create a new repository. Give it the name **<username>.github.io**, i.e. soosap.github.io
* Execute the commands from the Github new repository page.

```sh
$ git remote add origin https://github.com/soosap/soosap.github.io.git
$ git branch -M main
$ git push -u origin main
```

* Add `homepage` key to package.json using your Github Pages URL as the value, i.e. https://soosap.github.io
* Navigate to https://<your-username>.github.io/ (https://soosap.github.io)

### Chapter 4: Adding an Avatar that looks like you




