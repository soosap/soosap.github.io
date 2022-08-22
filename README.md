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


### Chapter 4: Deploy your website to Github Pages

1. Install npm module gh-pages
```sh
$ npm install gh-pages
```

2. Add `homepage` key to package.json using your Github Pages URL as the value
```diff
{
  "name": "personal-website",
  "version": "0.1.0",
+ "homepage": "https://soosap.github.io",
  "private": false,
```

3. Add `deploy` and `predeploy` scripts to your package.json file
```diff
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

4. Fire the `deploy` command whenever you are ready to update your live website
```sh
$ npm run deploy
```

5. Navigate to Github > Settings > Pages and select `gh-pages` as the **branch** option

6. Navigate to https://<your-username>.github.io/ to see your app deployed (i.e. https://soosap.github.io)

### Chapter 5: Set up directory structure

1. Delete `App.test.tsx` as we are not using it
2. Create `/src/components` directory
3. Break down App into individual components

### Chapter 6: Anatomy of a React component

1. Create a new directory under the `/src/components` directory and name is exactly as the component, i.e. Header
2. `npm install clsx`


### Chapter 5: Adding an Avatar that looks like you




