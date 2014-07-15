var Ticket = require('./models/ticket.js').Ticket;
var Project = require('./models/project.js').Project;
var Time = require('./models/time.js').Time;

/**
  *Unfuddle API requests.
  *Unified object.
  */
var Unfuddle = function(user,password,domain){
  //TODO: refactor this config location.
  var config = {
    "url": "https://" + domain + ".unfuddle.com",
    "user": user,
    "passwd": password,
    "headers": {
      "content-type": "application/json",
      "connection": "keep-alive",
      "host": domain + ".unfuddle.com",
      "accept": "application/json"
    }
  };

  this.ticket = new Ticket(config);
  this.project =  new Project(config);
  this.time =  new Time(config);
};

exports.Unfuddle = Unfuddle;
