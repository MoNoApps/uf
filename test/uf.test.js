//Dependencies
var Unfuddle = require('../uf.js').Unfuddle;
var assert = require("assert");
var Project = require('../models/project.js').Project;
var Ticket = require('../models/ticket.js').Ticket;
var Time = require('../models/time.js').Time;

//Initialization
var user = require('../credentials.json').user;
var passwd = require('../credentials.json').passwd;
var domain = require('../credentials.json').domain;

if(!user || !passwd || !domain){
	console.log("**************************************************");
	console.log("Write your credentials first into credentials.json");
	console.log("**************************************************");
	return false;
}

uf =  new Unfuddle(user, passwd, domain);

/**
  *Test for uf
  **/
describe('Uf', function(){
  describe('uf.project kind of Project', function(){
    it('uf.project should extend of Project', function(){
      assert.equal(typeof uf.project, 'object');

      describe('uf functions', function(){
        it('should exists common models', function(){
          assert.equal(uf.project instanceof Project, true);
          assert.equal(uf.ticket instanceof Ticket, true);
          assert.equal(uf.time instanceof Time, true);
        })
      })

      describe('uf.project methods', function(){
        it('should exists common methods for project', function(){
          assert.equal(typeof uf.project.find, 'function');
          assert.equal(typeof uf.project.findOne, 'function');
          assert.equal(typeof uf.project.insert, 'function');
          assert.equal(typeof uf.project.update, 'function');
        })
      })

      describe('uf.ticket methods', function(){
        it('should exists common methods for ticket', function(){
          assert.equal(typeof uf.ticket.find, 'function');
          assert.equal(typeof uf.ticket.findOne, 'function');
          assert.equal(typeof uf.ticket.insert, 'function');
          assert.equal(typeof uf.ticket.update, 'function');
        })
      })

      describe('uf.time methods', function(){
        it('should exists common methods for time', function(){
          assert.equal(typeof uf.time.find, 'function');
          assert.equal(typeof uf.time.findOne, 'function');
          assert.equal(typeof uf.time.insert, 'function');
          assert.equal(typeof uf.time.update, 'function');
        })
      })

      describe('uf.project works', function(){
        it('should return an array of projects', function(done){
          assert.equal(typeof uf.project , 'object');

          uf.project.find(function(data, err){
            assert.equal(typeof data , 'object');
            assert.equal(typeof data.length , 'number');
            assert.equal(typeof err, 'boolean');

            done();

          })
        })
      })

    })
  })
})
