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

## TODO
- [ ] Frontend
- [ ] Backend
  - [ ] API routes