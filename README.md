## NPM for Unfuddle
With this package you can use the next Unfuddle API endpoints:
```bash
/api/v1/projects
/api/v1/projects/:id/tickets
/api/v1/projects/:id/tickets/:ticket_id/time_entries

```

## How to use
````js
npm install uf

var Unfuddle = require('uf').Unfuddle;

var user = "my_user";
var passwd = "my_passwd";
var domain = "my_domain";

uf =  new uf(user, passwd, domain);

//retrieve project list
uf.project.find(function(data, err){
	console.log({data: data, err: err});
})
````


### Test file
Write your own credentials to:
```bash
credentials.json
```

```json
{
  "user": "my_user",
  "passwd": "my_passwd",
  "domain": "my_domain"
}

```
Run:
```bash
mocha
```
