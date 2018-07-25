const assert = require('assert');
const fs = require('fs');
const path = require('path');

const sum = require('../src/scripts/sum');

function checkString(file, string, done) {
  let character = '';
  let matchFound = false;
  let matchedPositions = 0;
  const readStream = fs.createReadStream(file, { encoding: 'utf8' });

  readStream.on('close', done);
  readStream.on('error', done);
  readStream.on('readable', function () { // eslint-disable-line
    // Read file until the string is found
    // or the whole file has been read
    // eslint-disable-next-line
    while (matchFound !== true && (character = readStream.read(1)) !== null) {
      if (character === string.charAt(matchedPositions)) {
        matchedPositions += 1;
      } else {
        matchedPositions = 0;
      }

      if (matchedPositions === string.length) {
        matchFound = true;
      }
    }

    assert.equal(true, matchFound);
    this.close();
  });
}

function runTests() {
  describe('Test if the files from the "/dist" directory have the expected content', () => {
    it('"index.html" should contain the main css file', (done) => {
      const string = '<link href="styles/';
      checkString(path.resolve('./dist', 'index.html'), string, done);
    });

    it('"index.html" should contain the main javascript file', (done) => {
      const string = 'src="scripts/runtime~';
      checkString(path.resolve('./dist', 'index.html'), string, done);
    });
  });

  describe('Test sum', () => {
    it('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });
  });
}

runTests();
