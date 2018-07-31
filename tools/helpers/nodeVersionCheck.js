const exec = require('child_process').exec;

exec('node -v', (err, stdout) => {
  if (err) throw err;

  if (parseFloat(stdout.slice(1)) < 6) {
    throw new Error('This project requires node 6.0 or greater.');
  } else {
    console.log(`Your node version is ok (${process.version}). Starting dependencies install...`);
  }
});
