# Personal Resume for Aaron Throckmorton (SharpSeeEr)

What better way to maintain a software developer's resume than by creating SPA and using Git?

## Technologies

* The resume is a [Vue.js app](https://vuejs.org/), created using [Vue Cli](https://cli.vuejs.org/).
* [Vue-Router](https://router.vuejs.org/) is used for applying custom additions/overrides for specific companies.
* All styling is done using [SCSS](https://sass-lang.com/), and is mobile first responsive.
* npm is used for managing packages and tasks.
* All editing was done in [Visual Studio Code](https://code.visualstudio.com/).

## Features

* The summary and skill section can be customized/overidden by adding a profile to the overrides section in the data file.  Specifying that profile name in the url shows the customized version.
* The printed version contains an additional link in the Personal Info section to view the custom version online.

## Project setup

To run the app locally:

```batch
git clone https://github.com/SharpSeeEr/resume.git
cd resume
npm install
npm run serve
```
