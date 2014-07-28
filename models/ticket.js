
var Zugmaschine = require('../utils/zugmaschine').Zugmaschine;

var Ticket = function(config){
  this.zm = new Zugmaschine(config);
  this.config = config;
};

Ticket.prototype.find = function(id, cb){

  this.zm.options.method = 'GET';
  this.zm.options.path = '/api/v1/projects/' + id + '/tickets';

  this.zm.exec(this.zm.options,function(data, err){
    cb(data || [],err);
  });

};

Ticket.prototype.findOne = function(id, pid, cb){

  this.zm.options.method = 'GET';
  this.zm.options.path = '/api/v1/projects/' + pid + '/tickets' + id;

  this.zm.exec(this.zm.options,function(data, err){
    cb(data,err);
  });

};

Ticket.prototype.findOne = function(id, pid, cb){

  this.zm.options.method = 'GET';
  this.zm.options.path = '/api/v1/projects/' + pid +
                 '/tickets' + id;

  this.zm.exec(this.zm.options,function(data, err){
    cb(data,err);
  });

};

Ticket.prototype.insert = function(ticket, pid, cb){

  this.zm.options.method = 'POST';
  this.zm.options.path = '/api/v1/projects/' + pid +
                 '/tickets' + ticket.id;
  this.zm.options.body = ticket;

  this.zm.exec(this.zm.options,function(data, err){
    cb(data,err);
  });

};

Ticket.prototype.update = function(ticket, pid, cb){

  this.zm.options.method = 'PUT';
  this.zm.options.path = '/api/v1/projects/' + pid +
                 '/tickets' + ticket.id;
  this.zm.options.body = ticket;

  this.zm.exec(this.zm.options,function(data, err){
    cb(data,err);
  });

};

exports.Ticket = Ticket;
