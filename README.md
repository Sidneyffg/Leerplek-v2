## Directories

- `/src`, base directory for the frontend code
  - `/src/components`, components directory
  - `/src/css`, css directory
  - `/src/pages`, pages directory
- `/api`, base directory for the backend code
- `/public`, static files served
- `/dist`, build directory for the frontend code

Manually set PROD to true in .env file to force production mode on development commands
```
PROD=true
```

## Routes
- `/new/:item`, url for creating sets, notes, etc.

- `/login`, url for logging in
- `/logout`, url for logging out

## Authentication

Authentication using JWT (JSON web token)
https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/

## TODO
- [ ] Frontend
- [ ] Backend
  - [ ] API routes
  - [ ] Authentication (JWT)

## ENV
```
PROD=false                                              # Force production mode if set to true
DEV_SERVER_PUBLIC=false                                 # Whether to serve on public address or not
DEV_SERVER_ADDRESS_LOCAL=http://localhost:5173          # Local address
DEV_SERVER_ADDRESS_PUBLIC=http://<your public ip>:5173  # Public address
```