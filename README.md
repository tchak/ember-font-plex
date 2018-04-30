ember-font-plex
==============================================================================

[![Ember Observer Score](http://emberobserver.com/badges/ember-font-plex.svg)](http://emberobserver.com/addons/ember-font-plex)
[![npm version](https://badge.fury.io/js/ember-font-plex.svg)](http://badge.fury.io/js/ember-font-plex)

The package of IBM’s typeface, [IBM Plex](https://github.com/IBM/plex), for EmberJS.

Installation
------------------------------------------------------------------------------

```
ember install ember-font-plex
```


Usage
------------------------------------------------------------------------------

```javascript
let app = new EmberApp(defaults, {
  'ember-font-plex': {
    fonts: [
      'IBM Plex Sans',
      'IBM Plex Sans Condensed',
      'IBM Plex Serif',
      'IBM-Plex-Mono'
    ]
  }
});
```

```css
h2 {
  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
}
```


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-font-plex`
* `yarn install`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
