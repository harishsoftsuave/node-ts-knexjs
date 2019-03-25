# node-ts-knexjs
## Steps
```sh
$ git clone https://github.com/harishsoftsuave/node-ts-knexjs.git
$ npm install
$ psql -f setup/setup.sql
$ npm run start
```

## API Usage
#### User List
```sh
# Get Method
https://localhost:3000/users
```

#### User By Id
```sh
# Get Method
https://localhost:3000/users/{id}
```

#### Create User
```sh
# Post Method
https://localhost:3000/users/create
# req body
{
        "email": "name@mail.com",
        "first_name": "name",
        "last_name": "last name"
}
```

#### Update User
```sh
# Post Method
https://localhost:3000/users/update
# req body
{
        "id": 1,
        "email": "name@mail.com",
        "first_name": "nname",
        "last_name": "last name"
}
```
