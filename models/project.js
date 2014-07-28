
var Zugmaschine = require('../utils/zugmaschine').Zugmaschine;

var Project = function(config){
  this.zm = new Zugmaschine(config);
  this.config = config;
};

Project.prototype.find = function(cb){

  this.zm.options.method = 'GET';
  this.zm.options.path = '/api/v1/projects';

  this.zm.exec(this.zm.options,function(data, err){
    cb(data || [],err);
  });

};

Project.prototype.findOne = function(id, cb){

  this.zm.options.method = 'GET';
  this.zm.options.path = '/api/v1/projects' + id;

  this.zm.exec(this.zm.options,function(data, err){
    cb(data,err);
  });

};

Project.prototype.insert = function(project, cb){

  this.zm.options.method = 'POST';
  this.zm.options.path = '/api/v1/projects';
  this.zm.options.body = project;

  this.zm.exec(this.zm.options,function(data, err){
    cb(data,err);
  });

};

Project.prototype.update = function(project, cb){

  this.zm.options.method = 'PUT';
  this.zm.options.path = '/api/v1/projects';
  this.zm.options.body = project;

  this.zm.exec(this.zm.options,function(data, err){
    cb(data,err);
  });

};

exports.Project = Project;
