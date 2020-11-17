# pizzaz-service 

## Getting started
1. git clone
2. create .env file by .env.example
3. run mongodb
4. npm run dev

# api routes

## Menu

### get menu
returns the available menu

```http
GET /api/menu
```
example response
```js
{
    "success": true,
    "data": [
        "price": {
            "USD": "17.99",
            "EUR": "15.14"
        },
        "id": 1,
        "name": "Turkey",
        "img": "https://somelink...",
        "composition": "descritption"
    ]
}
```

### seed menu
seed default menu

```http
GET /api/menu/seed
```
example response
```js
{
    "success": true,
}
```

### clear menu
remove all menu items

```http
GET /api/menu/clear
```
example response
```js
{
    "success": true,
}
```

## Order

### create order
create order

```http
POST /api/order
```

request
```json
//header
Content-Type: application/json
//body
{
    "order": [{"id": 1, "counter": 2}, {"id": 2, "counter": 4 }],
    "total": "1000 usd",
    "email": "test@test.com"
}

```
example response
```js
{
    "success": true,
    "data": {
        "status": "DELIVERED",
        "order": [{"id": 1, "counter": 2}, {"id": 2, "counter": 4 }],
        "createdDate": '2020-11-17T11:24:33.894Z',
        "total": "1000 usd",
        "email": "test@test.com"
    }
}
```

### all orders
get all orders

```http
GET /api/order/all
```
example response
```js
{
    "success": true,
    "data": [
        {
            "status": "DELIVERED",
            "order": [{"id": 1, "counter": 2}, {"id": 2, "counter": 4 }],
            "createdDate": '2020-11-17T11:24:33.894Z',
            "total": "1000 usd",
            "email": "test@test.com"
        }
    ]
}
```

### clear orders
clear all orders

```http
GET /api/order/clear
```
example response:
```js
{
    "success": true
}
```

## Auth

### signup
creat user in db
```http
POST /api/auth/signup
```

request:
```json
//headers
Content-Type: application/json
//body
{
    "name": "Test",
    "surname": "Test",
    "email": "test@test.com",
    "password": "test"
}
```
example response:
```js
{
    "token": "FsDsd333frfr..."
}
```

### signin
```http
POST /api/auth/signin
```

request:
```json
//headers
Content-Type: application/json
//body
{
    "email": "test@test.com",
    "password": "test"
}
```
example response:
```js
{
    "token": "FsDsd333frfr..."
}
```

### current user
return info about current user
```http
GET /api/auth/currentUser
```

request:
```json
//Headers
authorization: token
```

response:
```js
{
    "user": {
        "name": "Test",
        "surname": "Test",
        "email": "test@test.com",
    },
    "orderHistory": [
        {
            "status": "DELIVERED",
            "order": [{"id": 1, "counter": 2}, {"id": 2, "counter": 4 }],
            "createdDate": '2020-11-17T11:24:33.894Z',
            "total": "1000 usd",
            "email": "test@test.com"
        }
    ]
}
```
