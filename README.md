# [react-safe-context-hooks](https://github.com/cool-hooks/react-safe-context-hooks)

[![NPM version](http://img.shields.io/npm/v/react-safe-context-hooks?style=flat-square)](https://www.npmjs.com/package/react-safe-context-hooks)
[![NPM downloads](http://img.shields.io/npm/dm/react-safe-context-hooks?style=flat-square)](https://www.npmjs.com/package/react-safe-context-hooks)
[![NPM license](https://img.shields.io/npm/l/react-safe-context-hooks?style=flat-square)](https://www.npmjs.com/package/react-safe-context-hooks)
[![Codecov](https://img.shields.io/codecov/c/github/cool-hooks/react-safe-context-hooks?style=flat-square)](https://codecov.io/gh/cool-hooks/react-safe-context-hooks)
[![Travis](https://img.shields.io/travis/cool-hooks/react-safe-context-hooks/master?style=flat-square)](https://travis-ci.org/cool-hooks/react-safe-context-hooks)
[![Bundle size](https://img.shields.io/bundlephobia/min/react-safe-context-hooks?style=flat-square)](https://bundlephobia.com/result?p=react-safe-context-hooks)

## About

Make sure context exists

### Similar Projects / Alternatives / Idea

- [react-safe-context](https://github.com/dslane/react-safe-context) by [dslane](https://github.com/dslane)

## How to Install

First, install the library in your project by npm:

```sh
$ npm install react-safe-context-hooks
```

Or Yarn:

```sh
$ yarn add react-safe-context-hooks
```

## Getting Started

**• Import hook in React application file:**

```js
import { useSafeContext } from 'react-safe-context-hooks';
```

#### Example

```js
// before
const App = () => {
  const context = useContext(ExampleContext);

  return ();
};

// after
const App = () => {
  const context = useSafeContext(ExampleContext);

  return ();
};
```

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
