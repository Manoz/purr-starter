// Load the favicon and the .htaccess file
import '!file-loader?name=images/favicon/[name].[ext]!../../public/images/favicon/favicon.ico';
import 'file-loader?name=.htaccess!../../public/.htaccess';

import '../styles/style.scss';
import pkg from '../../package.json';

const appVersion = pkg.version;

console.log(`It works. App version: ${appVersion}`);
