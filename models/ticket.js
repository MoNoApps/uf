
var Zugmaschine = require('../utils/zugmaschine').Zugmaschine;

var Ticket = function(config){
  this.config = config;
};

Ticket.prototype.find = function(id, cb){

  var zm = new Zugmaschine(this.config);
  var options =  zm.options;
  options.method = 'GET';
  options.path = '/api/v1/projects/' + id + '/tickets';

  zm.exec(options,function(data, err){
    cb(data || [],err);
  });

};

Ticket.prototype.findOne = function(id, pid, cb){

  var zm = new Zugmaschine(this.config);
  var options =  zm.options;
  options.method = 'GET';
  options.path = '/api/v1/projects/' + pid + '/tickets' + id;

  zm.exec(options,function(data, err){
    cb(data,err);
  });

};

Ticket.prototype.findOne = function(id, pid, cb){

  var zm = new Zugmaschine(this.config);
  var options =  zm.options;
  options.method = 'GET';
  options.path = '/api/v1/projects/' + pid +
                 '/tickets' + id;

  zm.exec(options,function(data, err){
    cb(data,err);
  });

};

Ticket.prototype.insert = function(ticket, pid, cb){

  var zm = new Zugmaschine(this.config);
  var options =  zm.options;
  options.method = 'POST';
  options.path = '/api/v1/projects/' + pid +
                 '/tickets' + ticket.id;
  options.body = ticket;

  zm.exec(options,function(data, err){
    cb(data,err);
  });

};

Ticket.prototype.update = function(ticket, pid, cb){

  var zm = new Zugmaschine(this.config);
  var options =  zm.options;
  options.method = 'PUT';
  options.path = '/api/v1/projects/' + pid +
                 '/tickets' + ticket.id;
  options.body = ticket;

  zm.exec(options,function(data, err){
    cb(data,err);
  });

};

exports.Ticket = Ticket;
