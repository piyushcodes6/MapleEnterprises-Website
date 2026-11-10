# Maple Enterprises Platform

Modern real estate platform for Maple Enterprises with:
- Public Website (property discovery and lead capture)
- Admin Portal (content and operations management)

## Repository Structure

- `frontend/` - React + TypeScript + Vite application
- `documents/` - planning docs, implementation tracker, and design notes

## Tech Stack

- React
- TypeScript
- Vite
- React Router

## Getting Started

### 1. Go to frontend

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

## Key Scripts

From the `frontend/` folder:
- `npm run dev` - start local development server
- `npm run build` - type-check and create production build

## Runtime Data Mode

Frontend persistence adapters support two runtime modes selected with `VITE_DATA_MODE`:

- `local` (default): uses local storage keys for normal local development
- `api-stub`: uses API-stub storage adapters to mimic backend-connected mode boundaries

Set in `frontend/.env`:

```env
VITE_DATA_MODE=api-stub
```

If unset, the app defaults to `local` mode.

## Deploy Frontend to GitHub Pages

GitHub Pages deployment is configured via GitHub Actions:

- Workflow file: `.github/workflows/deploy-frontend-pages.yml`
- Trigger: push to `main` (or manual run)
- Output: `frontend/dist`

### One-time repository setup

1. Open repository Settings -> Pages.
2. Under Build and deployment, set Source to GitHub Actions.
3. Push to `main`.

After the workflow finishes, the site will be available at:

`https://<your-github-username>.github.io/<repo-name>/`

The workflow also publishes `404.html` as an SPA fallback, so React Router routes can be opened directly.

## Current Status

The UI foundation, public pages, admin page shells, and premium card-driven layout are implemented and iteratively refined.

For progress details, see:
- `documents/implementation-plan.md`
- `documents/implementation-tracker.md`

## Next Steps

- Connect frontend workflows to backend APIs
- Implement complete lead capture and CRM flow
- Add QA hardening and launch checklist
