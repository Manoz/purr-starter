// Load the favicon and the .htaccess file
import '!file-loader?name=[name].[ext]!../assets/images/favicon/favicon.ico';
import 'file-loader?name=[name].[ext]!../.htaccess';

import '../styles/style.scss';
import pkg from '../../package.json';

const appVersion = pkg.version;

console.log(`It works. App version: ${appVersion}`);
