[![Netlify Status](https://api.netlify.com/api/v1/badges/73bcc211-4a73-4fd7-aa07-077599617592/deploy-status)](https://app.netlify.com/sites/uxdi-intro-to-code/deploys)![CI](https://github.com/pataruco/uxdi/workflows/CI/badge.svg)

# Intro to code day

## What it is?

Is [React][react] hosted in [Netlify][netlify] site with the content slides for Intro to code day for [General Assembly London][ga] User Experience Immersive.

## Website

Here is https://uxdi-intro-to-code.pataruco.dev/

## Technologies

- [React][react]
- [Netlify][netlify]
- [GitHub actions][gh-actions]
- [Remark][remark]

## How to install

- Clone this repo

```sh
git clone git@github.com:pataruco/uxdi.git
```

- Install dependencies

```sh
yarn
```

## How to run locally

```sh
yarn start
```

## How to deploy

A [Github action][gh-actions] is set to deal with deployments to prod. To trigger a deployment

- Create a git release [tag][git-tag] with the following convention `R.<number>.<number>.<number>`

```sh
git tag R.1.0
```

- Push tag to remote

```sh
git push --tags
```

- You can check CI/CD build [here](https://github.com/pataruco/uxdi/actions?query=workflow%3ACI)

- Make a tea 🫖

- 🚀

[react]: https://reactjs.org/
[netlify]: https://www.netlify.com/
[ga]: https://generalassemb.ly/locations/london
[gh-actions]: https://github.com/features/actions
[remark]: https://github.com/gnab/remark/
[git-tag]: https://git-scm.com/book/en/v2/Git-Basics-Tagging
