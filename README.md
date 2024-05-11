# Simple Products API

Just a simple API with 3 endpoints.

API_BASE_URL = https://products-api-delta.vercel.app

## Available Endpoints

Here is how to use this API. The following is an explanation to all the available endpoints. You can find the API's base url in the about section of the repository.

### get all products

Send a get request to the following endpoint:

```
/api/products
```

example:

```
https://products-api-delta.vercel.app/api/products
```

### search for products

Send a get request with query parameter named `q` to the following endpoint:

```
/api/products/search
```

example:

```
https://products-api-delta.vercel.app/api/products/search?q=phone
```

### get single product by id

Send a get request to the following endpoint:

```
/api/product/:id
```

example:

```
https://products-api-delta.vercel.app/api/product/1
```

### get products by ids

Send a get request to the following endpoint:

```
/api/products/:ids
```

example:

```
https://products-api-delta.vercel.app/api/products/1,2,3
```
