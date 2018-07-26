// This script cleans the demo app
const shell = require('shelljs');
const addCheckMark = require('./helpers/checkmark');

process.stdin.setEncoding('utf8');

// Test if the app is deleted already (just in case)
if (!shell.test('-e', 'tools/templates')) {
  shell.echo('The demo app is deleted already.');
  shell.exit(1);
}

process.stdout.write('Demo app cleanup started...');

// Cleanup demo content
shell.rm('-rf', 'public/images');
shell.rm('-rf', 'src/scripts/*');
shell.rm('-rf', 'src/styles/*');
shell.rm('-rf', 'public/index.html');
shell.rm('-rf', 'test/index.test.js');

// Replace the files in the root src/ folder
shell.cp('tools/templates/index.html', 'public/index.html');
shell.cp('tools/templates/index.test.js', 'test/index.test.js');
shell.cp('tools/templates/main.js', 'src/scripts/main.js');
shell.cp('tools/templates/style.scss', 'src/styles/style.scss');
shell.mv('tools/templates/images', 'public/images');

// Remove the templates folder
shell.rm('-rf', 'tools/templates');

addCheckMark();

shell.echo('\nDemo app removed. Have fun!');
