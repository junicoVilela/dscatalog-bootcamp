# HEROKU
## GIT HEROKU
### Linkar Projeto no HEROKU
```bash
heroku git:remote -a NOME_PROJETO_HEROKU
```
### Subir Projeto no HEROKU
```bash
git subtree push --prefix backend heroku main
```

## Variáveis HEROKU

### Heroku CLI
```bash
sudo npm install -g heroku
```

### HEROKU

* Create New App - dscatalog
* Criar Heroku Postgres

### Variáveis HEROKU

* CLIENT_ID = dscatalog
* CLIENT_SECRET = dscatalog123
* DATABASE_URL = postgres://gqponihldwaztf:619fd26ee3719934c3ffe00ebd6714bd0e69aaf68e308f0390d8f790dbeeb7b2@ec2-54-173-77-184.compute-1.amazonaws.com:5432/d9tm47n3tv42ok
* JWT_DURATION = 86400
* JWT_SECRET = 123456
* APP_PROFILE = prod
* MAX_FILE_SIZE

### Configuraçoes AWS no HEROKU
* AWS_KEY
* AWS_SECRET
* DSCATALOG_BUCKET_NAME
* DSCATALOG_BUCKET_REGION
