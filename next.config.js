/* eslint @typescript-eslint/no-var-requires: "off" */

const path = require('path');
const nextTranslate = require('next-translate');

module.exports = {
  ...nextTranslate(),
  sassOptions: {
    includePaths: [path.join(__dirname, './src/styles')],
  },
};
