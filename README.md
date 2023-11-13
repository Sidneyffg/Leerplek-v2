## Directories

- `/src`, base directory for the frontend code
  - `/src/components`, components directory
  - `/src/css`, css directory
  - `/src/pages`, pages directory
- `/api`, base directory for the backend code
- `/public`, static files served
- `/dist`, build directory for the frontend code

## Servers
- Frontend, were the vite dev server hosts
  - :5173
- Backend, where all requests will go through
  - :8080

## Start server

Development
```sh
pnpm start                    # Start frontend and backend
pnpm start:reload             # Start frontend and backend with nodemon
pnpm start:frontend           # Start frontend only
pnpm start:backend            # Start backend only
pnpm start:backend:reload     # Start backend only
```

Production
```sh
pnpm build                    # Build frontend files
pnpm prod                     # Serve production version
```

Or manually set PROD to true in .env file to force production mode on development commands
```
PROD=true
```

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