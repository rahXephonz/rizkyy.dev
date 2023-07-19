# My Personal Site

My Personal site built with Astro, Typescript, Hygraph, GraphQL and Tailwind

## Features

- ⚡️ Astro 2
- ⚛️ React Extended
- ⛑ TypeScript
- 💅 Tailwind for styling and components
- 📏 ESLint — Find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- ⚙️ EditorConfig — Maintain consistent coding styles across editors and IDEs
- 🗂 Path Mapping — Import components or images using the `@` prefix
- 🌐 Giscuss as commenting systems
- ✍️ Hygraph for handling content CMS use GraphQL

## Quick Start

You need to clone this repo using this command to cloning or create the app

```bash
git clone https://github.com/rahxephonz/rizkyy.dev.git
```

### Development

To start the project locally, run:

```bash
yarn dev
```

Open `http://localhost:3000` with your browser to see the result.

### Requirements

- Node.js >= 12.22.0
- pnpm >= 8

### Directory Structure

- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles, etc.

### Scripts

- `yarn dev` — Starts the application in development mode at `http://localhost:3000`.
- `yarn build` — Creates an optimized production build of your application.
- `yarn preview` — Starts the application in production mode.
- `yarn lint` — Runs ESLint for all files in the `src` directory.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```ts
import {Button} from "@components/Button";
```

### Note: Switch to pnpm for running this app

By default, this starter uses pnpm, please install pnpm first for global engine package, and then install the dependencies with `pnpm`
