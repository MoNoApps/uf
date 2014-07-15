
var Zugmaschine = require('../utils/zugmaschine').Zugmaschine;

var Time = function(config){
  this.config = config;
};

Time.prototype.find = function(id, tid, cb){

  var zm = new Zugmaschine(this.config);
  var options =  zm.options;
  options.method = 'GET';
  options.path = '/api/v1/projects/' + id +
                 '/tickets/' + tid +
                 '/time_entries';

  zm.exec(options,function(data, err){
    cb(data || [],err);
  });

};

Time.prototype.findOne = function(id, tid, pid, cb){

  var zm = new Zugmaschine(this.config);
  var options =  zm.options;
  options.method = 'GET';
  options.path = '/api/v1/projects/' + pid +
                 '/tickets/' + tid +
                 '/time_entries' + id;

  zm.exec(options,function(data, err){
    cb(data,err);
  });

};

Time.prototype.findOne = function(id, tid, pid, cb){

  var zm = new Zugmaschine(this.config);
  var options =  zm.options;
  options.method = 'GET';
  options.path = '/api/v1/projects/' + pid +
                 '/tickets/' + tid +
                 '/time_entries'; + id;

  zm.exec(options,function(data, err){
    cb(data,err);
  });

};

Time.prototype.insert = function(time, tid, pid, cb){

  var zm = new Zugmaschine(this.config);
  var options =  zm.options;
  options.method = 'POST';
  options.path = '/api/v1/projects/' + pid +
                 '/tickets/' + tid +
                 '/time_entries';+ time.id;
  options.body = time;

  zm.exec(options,function(data, err){
    cb(data,err);
  });

};

Time.prototype.update = function(time, tid, pid, cb){

  var zm = new Zugmaschine(this.config);
  var options =  zm.options;
  options.method = 'PUT';
  options.path = '/api/v1/projects/' + pid +
                 '/tickets/' + tid +
                 '/time_entries'; + time.id;
  options.body = time;

  zm.exec(options,function(data, err){
    cb(data,err);
  });

};

exports.Time = Time;
