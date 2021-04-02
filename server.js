var express = require('express');
var app = express();
/*app.use(express.static('dist/front-end'));
app.get('/', function (req, res,next) {
    res.redirect('/');
});
*/
app.use(express.static('build'));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile('build/index.html',{ root: '.' });
});
// comentario

app.listen(8080)