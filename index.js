'use strict';

const fs = require('fs');
const path = require('path');
const plexPath = path.dirname(require.resolve('@ibm/plex/package.json'));
const plexPkg = require('@ibm/plex/package.json');

module.exports = {
  name: 'ember-font-plex',
  included: function() {
    this._super.included.apply(this, arguments);

    let options = (this.app.options['ember-font-plex'] =
      this.app.options['ember-font-plex'] || {});
    let fonts = (options['fonts'] || ['IBM Plex Sans']).map(fontFamily =>
      fontFamily.replace(/\s/g, '-')
    );

    let version = plexPkg.version;

    fonts.forEach(fontFamily => {
      this.import(`vendor/${fontFamily.toLowerCase()}.css`);
    });

    fonts.forEach(fontFamily => {
      let fontPath = path.join(fontFamily, 'fonts/split');

      ['woff', 'woff2'].forEach(format => {
        let absoluteFontsPath = path.join(plexPath, fontPath, format);
        let fontsToImport = fs.readdirSync(absoluteFontsPath);
        fontsToImport.forEach(filename => {
          this.import(
            path.join('node_modules/@ibm/plex', fontPath, format, filename),
            {
              destDir: path.join('assets/fonts', fontFamily, version, format)
            }
          );
        });
      });
    });
  }
};
