const { chalkSuccess } = require('./chalkConfig');

/**
 * Adds mark check symbol
 */
function addCheckMark(callback) {
  process.stdout.write(chalkSuccess(' ✓'));
  if (callback) callback();
}

module.exports = addCheckMark;
