# Test Project

***

</br>
</br>

# App

## Used Components

| Component | Version | Description |
| --- | --- | --- |
| Node.js | 12.1.0 `node -v` | Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. |
| npm | 6.12.1 `npm -v` | npm is the package manager for the Node JavaScript platform. It puts modules in place so that node can find them, and manages dependency conflicts intelligently. |
| React | 16.10.2 `npm view react version` | A JavaScript library for building user interfaces |
| React Router | 5.1.2 `npm view react-router-dom version` | React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native. |
| Firebase | 7.1.0 `npm view firebase version` | Firebase JavaScript library for web and Node.js |
| Recompose | 0.30.0 `npm view recompose version` | Recompose is a React utility belt for function components and higher-order components (HOC). Think of it like lodash for React. |
| Firebase-Tools | 7.7.0 `npm view firebase-tools version` | The Firebase CLI provides a variety of tools for managing, viewing, and deploying to Firebase projects. |
| Bootstrap | 4.3.1 | Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. |
| React Bootstrap | 1.0.0-beta.14 | Bootstrap components built with React |
| React Router Bootstrap | 0.25.0 | Integration between React Router and React-Bootstrap |
| Node-sass | 4.12.0 | Allows you to natively compile .scss files to css at incredible speed and automatically via a connect middleware. |
| `react-slick` | 0.25.2 | Slick slider for React |
| `react-intl` | 3.3.2 | This library provides React components and an API to format dates, numbers, and strings, including pluralization and handling translations. |
| `@formatjs/intl-pluralrules` | 1.3.0 | for internationalization |
| `@formatjs/intl-relativetimeformat` | 4.2.0 | for internationalization |
| `rc-slider` | 8.7.1 | Range slider for React |
| `react-redux` | 7.1.1 | Redux - react |
| `redux` | 4.0.4 | Redux |
| `react-intl-redux` | 2.1.1 | Package for react-intl to work with Redux |



***

</br>
</br>

## App Structure
```
cash-cow-app
├── build
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── assets
│   │   ├── images
│   │   │   └── logo.svg
│   │   └── translations
│   │       ├── et.json
│   │       ├── ru.json
│   │       └── en.json
│   ├── components
│   │   ├── app
│   │   │   ├── app.scss
│   │   │   ├── app.js
│   │   │   └── index.js
│   │   └── component-name
│   │       ├── component-name.scss
│   │       ├── component-name.js
│   │       └── index.js
│   ├── utils
│   │   └── helpers.js
│   ├── routers
│   │   └── router.js
│   ├── reducers
│   │   ├── index.js
│   │   ├── listing.js
│   │   ├── user.js
│   │   ├── session.js
│   │   └── ....
│   ├── store
│   │   └── index.js
│   ├── index.scss
│   ├── index.js
│   └── service-worker.js
├── .gitignore
├── package.json
└── README.md
```

***

</br>
</br>