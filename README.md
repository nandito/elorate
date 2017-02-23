# ELORate

Rank items by using ELO rating system.

## Usage

1. Add items on the Collect page
2. Decide between items on the Rate page

## Install

1. Clone this repository with `git clone`
2. Navigate to the repository's folder and install dependencies: `npm install`
3. Build: `npm run build`
4. Start server: `npm run server`


* Run tests: `npm run test`
* Run tests in watch mode: `npm run test:watch`
* Run eslint: `npm run lint`

## Technical details

* This is a [React](https://facebook.github.io/react/) app with [Redux](http://redux.js.org/) state container and with [Pavlilion](http://pavilion.io/) CSS framework.
* For development it uses [Live Server](https://github.com/tapio/live-server) with [watchify](https://github.com/substack/watchify)
* For testing it uses [Mocha](http://mochajs.org/) test framework + [Chai](http://chaijs.com/) assertion library + [Enzyme](http://airbnb.io/enzyme/index.html) test utility

## Todos

#### Global
* [ ] Use JSX
* [ ] Background
* [ ] Empty picked item list if items are removed
* [ ] Nice navigation with `active` item indication
* [ ] Toggle scores on a modal
* [ ] CI
* [ ] Deploy to Github pages

#### Settings
* [ ] `K` factor
* [ ] Default score (when a new item is created)

#### Collect page
* [ ] Notification if import fails
* [ ] Game count
