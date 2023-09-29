## Setting environment variables

```bash
export GRAPHQL_JWT_AUTH_SECRET_KEY=YOUR_KEY
export AUTH_REFRESH_TOKEN=YOUR_KEY
export REFRESH_TOKEN=YOUR_KEY
export GITHUB_AUTH_CLIENT_ID=YOUR_KEY
export GITHUB_AUTH_CLIENT_SECRET=YOUR_KEY
export NEXTAUTH_URL=YOUR_KEY
export NEXTAUTH_SECRET=YOUR_KEY
export ADMIN_MAIL_ADDRESS=YOUR_KEY
```

## Getting Started

First, enable pnpm:

```bash
corepack enable
```

Second, install packages:

```bash
pnpm i
```

### Run Next app on development:

```bash
pnpm dev
```

### Run storybook on development:

```bash
pnpm sb
```

## Build commands:

The built files are not managed in git.

### Build Next app:

```bash
pnpm build
```

### Build storybook:

```bash
pnpm build:sb
```
