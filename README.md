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

var uf = requiere('uf')
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
