# Router.js

*To see Router.js in action, check out the
[Cardinal apps](https://cardinalapps.xyz).*

Router.js is a dependency-free ES6 JavaScript library that provides
unopinionated router functionality for single-page apps.

An instance of the `Router` object is designed to live in the `window`, and it
will handle the state of any view window (DOM Element) that you give it.

## Features

- Navigation history
  - Refresh
  - Back
  - Forward
  - Configurable max number of items
  - Remembers scroll position for each page
- RESTful parameter substitution
- View caching (optimized for [Lowrider.js](https://github.com/somebeaver/Lowrider.js))
- Child routes
- Automatically handles `<a>`'s in the DOM
- Internationalization
  - Supports any number of languages
  - Can hot swap languages

## API Reference

A reference of all public Router.js methods is available in
**[DOCS.md](DOCS.md)**.

## License

Licensed under the Mozilla Public License 2.0.