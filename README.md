# Router.js

UI router for all web based Hydra apps.

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
- View caching
- Child routes
- Automatically handles `<a>`'s in the DOM
- Internationalization
  - Supports any number of lanauges
  - Can hot swap languages