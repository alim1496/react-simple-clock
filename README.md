# react-simple-clock

This repository contains simple analog clock to be used in React applications. You can either use the live clock or set 
your given time to see a stationary clock.

## Installation

### NPM
```sh
npm install react-simple-clock
```

## Usage

### Fixed clock with provided time
```js
import React from 'react'
import Clock from 'react-simple-clock'

const MyApp = () => <Clock hourValue={2} minuteValue={20} />

export default MyApp
```
![screenshot 1](images/fixedClock.png)

### Live styled clock with number marked hour
```js
import React from 'react'
import Clock from 'react-simple-clock'

const MyApp = () => <Clock live={true} hourMarkFormat="number" className="your-class" />

export default MyApp
```
```css
.your-class {
	border-width: 5px !important;
	border-color: rgb(6, 100, 240) !important;
	background-color: rgba(212, 242, 251, 0.753);
}
```
![screenshot 2](images/liveClock.png)

### Live styled clock in dark mode
```js
import React from 'react'
import Clock from 'react-simple-clock'

const MyApp = () => <Clock live={true} hourMarkFormat="number" className="your-class" mode="dark" />

export default MyApp
```
```css
.your-class {
	border-width: 5px !important;
	border-color: rgb(0, 10, 25) !important;
	background-color: rgba(2, 12, 15, 0.753);
}
```
![screenshot 3](images/darkClock.png)

## To run in development

```bash
npm run dev
```

## To run tests

```bash
npm test
```

or

```bash
npm run watch
```

## License

MIT © [alim1496](https://github.com/alim1496)
