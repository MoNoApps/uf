var https = require('https');

/**
  * The Tracktor object.
  * This object uses https and send the request to unfuddle API.
  */
var Zugmaschine = function(config){
  this.options = {
    hostname : config.url,
    port :      443,
    path :       '', //override
    method :     '', //override
    auth :    config.user + ':' + config.passwd,
    headers : config.headers
  };
};

/**
  * Process request.
  */
Zugmaschine.prototype.exec = function(options, cb){

  var req = https.request(options, function(res) {
    var data = '';
    res.on('data', function(d) {
      data += d;
    });

    res.on('end', function() {
      if (res.statusCode === 200) {
        cb(JSON.parse(data), false);
      } else {
          if(typeof cb === 'function'){
            cb(false, {message: 'Status code ' + res.statusCode});
          }
      }
    });
  });

  req.end();

  req.on('error', function(e) {
    cb(false, e);
  });

};

exports.Zugmaschine = Zugmaschine;
