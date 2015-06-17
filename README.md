# Tracktics KISSmetrics Plugin

[Tracktics][tracktics] plugin for providing KISSmetrics support.

[![npm Version][npm-badge]][npm]
[![Build Status][build-badge]][build-status]
[![Test Coverage][coverage-badge]][coverage-result]
[![Dependency Status][dep-badge]][dep-status]

## Installation

Install using npm:

    $ npm install tracktics-kissmetrics

## Usage

Basic usage that integrates with KISSmetrics in a simple jQuery app:

```html
<button id="purchase-button"
        type="button"
        data-tracktics-on="click"
        data-tracktics-event="Signed Up">Sign Up Now!</button>
```

```js
'use strict';

var $ = require('jquery'),
    tracktics = require('tracktics'),
    tracker = tracktics();

// Register the KISSmetrics plugin.
tracker.use(require('tracktics-kissmetrics')());

$(document).ready(function() {
    // Add event listeners for mouse events on elements that have had
    // data-tracktics-* attributes defined.
    tracker.bind();
});
```

## Declarative Analytics Tracking

tracktics-kissmetrics only requires `data-tracktics-event` for event tracking.
Beyond this, any `data-tracktics-*` attributes may be specified to send
additional data to KISSmetrics.

## API

### `tracktics-kissmetrics()`

```js
var tracktics = require('tracktics'),
    trackticsKiss = require('tracktics-kissmetrics'),
    tracker = tracktics();

tracker.use(trackticsKiss());
```

The main tracktics-kissmetrics export, `tracktics-kissmetrics` is a factory
function for generating tracktics-kissmetrics plugin instances.  Calling this
method will initialize `_kmq` if it hasn't been already, then return an object
that implements page and event tracking for KISSmetrics.

### `#trackPage(url)`

Method for manual page tracking.

### `#trackEvent(action, properties)`

Method for manual event tracking.

## License

MIT

[build-badge]: https://img.shields.io/travis/jimf/tracktics-kissmetrics/master.svg
[build-status]: https://travis-ci.org/jimf/tracktics-kissmetrics
[npm-badge]: https://img.shields.io/npm/v/tracktics-kissmetrics.svg
[npm]: https://www.npmjs.org/package/tracktics-kissmetrics
[coverage-badge]: https://img.shields.io/coveralls/jimf/tracktics-kissmetrics.svg
[coverage-result]: https://coveralls.io/r/jimf/tracktics-kissmetrics
[dep-badge]: https://img.shields.io/david/jimf/tracktics-kissmetrics.svg
[dep-status]: https://david-dm.org/jimf/tracktics-kissmetrics
[tracktics]: https://github.com/jimf/tracktics
