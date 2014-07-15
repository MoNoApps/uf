
var Zugmaschine = require('../utils/zugmaschine').Zugmaschine;

var Project = function(config){
  this.config = config;
};

Project.prototype.find = function(cb){

  var zm = new Zugmaschine(this.config);
  var options =  zm.options;
  options.method = 'GET';
  options.path = '/api/v1/projects';

  zm.exec(options,function(data, err){
    cb(data || [],err);
  });

};

Project.prototype.findOne = function(id, cb){

  var zm = new Zugmaschine(this.config);
  var options =  zm.options;
  options.method = 'GET';
  options.path = '/api/v1/projects' + id;

  zm.exec(options,function(data, err){
    cb(data,err);
  });

};

Project.prototype.findOne = function(id, cb){

  var zm = new Zugmaschine(this.config);
  var options =  zm.options;
  options.method = 'GET';
  options.path = '/api/v1/projects' + id;

  zm.exec(options,function(data, err){
    cb(data,err);
  });

};

Project.prototype.insert = function(project, cb){

  var zm = new Zugmaschine(this.config);
  var options =  zm.options;
  options.method = 'POST';
  options.path = '/api/v1/projects';
  options.body = project;

  zm.exec(options,function(data, err){
    cb(data,err);
  });

};

Project.prototype.update = function(project, cb){

  var zm = new Zugmaschine(this.config);
  var options =  zm.options;
  options.method = 'PUT';
  options.path = '/api/v1/projects';
  options.body = project;

  zm.exec(options,function(data, err){
    cb(data,err);
  });

};

exports.Project = Project;
