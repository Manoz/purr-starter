const exec = require('child_process').exec;
const { chalkError, chalkSuccess } = require('./chalkConfig');

exec('node -v', (err, stdout) => {
  if (err) throw err;

  if (parseFloat(stdout.slice(1)) < 6) {
    throw new Error(chalkError('This project requires node 6.0 or greater.'));
  } else {
    console.log(chalkSuccess(`Your node version is ok (${process.version}). Starting dependencies install...`));
  }
});
