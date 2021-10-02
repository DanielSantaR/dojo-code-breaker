var server = require('./app.js');
var port = process.env.PORT || 3000;

server.listen(port, function(){
  console.log('Listen on port',port);
});