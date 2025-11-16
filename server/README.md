# Server

Express server for the Kratos workspace.

## Scripts

- `pnpm dev` – start server with nodemon (auto-restarts on changes)
- `pnpm start` – start server with node

## Environment

- `PORT` (optional) – port to listen on (default 3000)

## Routes

- `GET /health` – returns JSON `{ status: 'ok', timestamp: <ISO> }`
- `GET /` – basic text response

## Run

From the repo root or `server` folder:

```bash
cd server
pnpm dev
```

Visit: http://localhost:3000/health
