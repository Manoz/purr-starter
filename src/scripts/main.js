// Load the favicon and the .htaccess file
import '!file-loader?name=[name].[ext]!../assets/images/favicon/favicon.ico';
import 'file-loader?name=[name].[ext]!../.htaccess';

import '../styles/style.scss';

console.log('It works');
