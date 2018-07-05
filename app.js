let app = require('./server');
let config = require('./config');


let port = config.app.port || 3000;


// Turn on the server!
app.listen(port, () => {
    console.log('App listening on port ' + port);
  });