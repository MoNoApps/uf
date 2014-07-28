
var Zugmaschine = require('../utils/zugmaschine').Zugmaschine;

var Time = function(config){
  this.zm = new Zugmaschine(config);
  this.config = config;
};

Time.prototype.find = function(id, tid, cb){
  this.zm.options.method = 'GET';
  this.zm.options.path = '/api/v1/projects/' + id +
                 '/tickets/' + tid +
                 '/time_entries';

  this.zm.exec(this.zm.options,function(data, err){
    cb(data || [],err);
  });

};

Time.prototype.findOne = function(id, tid, pid, cb){

  this.zm.options.method = 'GET';
  this.zm.options.path = '/api/v1/projects/' + pid +
                 '/tickets/' + tid +
                 '/time_entries' + id;

  this.zm.exec(this.zm.options,function(data, err){
    cb(data,err);
  });

};

Time.prototype.findOne = function(id, tid, pid, cb){

  this.zm.options.method = 'GET';
  this.zm.options.path = '/api/v1/projects/' + pid +
                 '/tickets/' + tid +
                 '/time_entries/' + id;

  this.zm.exec(this.zm.options,function(data, err){
    cb(data,err);
  });

};

Time.prototype.insert = function(time, tid, pid, cb){

  this.zm.options.method = 'POST';
  this.zm.options.path = '/api/v1/projects/' + pid +
                 '/tickets/' + tid +
                 '/time_entries/' + time.id;
  this.zm.options.body = time;

  this.zm.exec(this.zm.options,function(data, err){
    cb(data,err);
  });

};

Time.prototype.update = function(time, tid, pid, cb){

  this.zm.options.method = 'PUT';
  this.zm.options.path = '/api/v1/projects/' + pid +
                 '/tickets/' + tid +
                 '/time_entries/' + time.id;
  this.zm.options.body = time;

  this.zm.exec(this.zm.options,function(data, err){
    cb(data,err);
  });

};

exports.Time = Time;
