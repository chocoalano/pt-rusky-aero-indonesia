# Instalation Guide

Download the repository to your computer using the `git clone` command. Url
The repository can be seen in the pt-rusky-aero-indonesia repository.

```
git clone <url repository> <destination folder>
```

#### Example

```
user@host:~$ git clone https://github.com/chocoalano/pt-rusky-aero-indonesia.git pt-rusky-aero-indonesia
Cloning into 'pt-rusky-aero-indonesia'...
remote: Counting objects: 4, done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 4 (delta 0), reused 4 (delta 0), pack-reused 0
Unpacking objects: 100% (4/4), done.
```

#### Install package

```
cd pt-rusky-aero-indonesia
npm install
```

#### Setup .ENV

```
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=(username database)
MYSQL_PASSWORD=(password database)
MYSQL_DB_NAME=(nama database)
```

#### Migration Database

```
# Run the database
node ace migration:run
```
# Run the database seeder
node ace db:seed
```
# Refresh the database and run all seeders
node ace migration:refresh --seed
```

#### Unit testing

```
node ace test

# [ info ]  running tests...

# tests/functional/hello-world.spec.ts
#   ✔ display welcome page (24ms)

#  PASSED 

# total        : 1
# passed       : 1
# duration     : 28ms

```

#### Run application services on development mode

```
node ace serve --watch

```

#### Build and run application on production mode

```
node ace build --production
cd build
node server.js

```
