# Cambridge Rentals

Cambridge Rentals is a React property-rental listing page. It displays a collection of homes, flats, and cottages with photos, property details, monthly rent, and availability information. The project was built as a React learning exercise.

You can find the deployment of this code [here](https://rajasi-desai.github.io/Cambridge-Rentals)

## Features

- Browse a grid of rental properties in Cambridge.
- View each property's type, photo, bedroom and bathroom count, floor area, address, monthly rent, and availability date.
- See unavailable listings visually marked as unavailable.
- View the agency's open or closed status, based on weekday opening hours (Monday to Friday, 9:00–17:00).
- Responsive page layout for smaller screens.

Property listings are currently static sample data maintained in `src/data/properties.js`; this project does not connect to a backend or provide search and booking.

## Built with

- React 19
- Vite
- `lucide-react` icons
- ESLint

## Getting started

Install the dependencies and start the local development server:

```sh
npm install
npm run dev
```

Vite prints the local URL in the terminal after the server starts.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint across the project. |
| `npm run deploy` | Build and publish `dist/` using `gh-pages`. |

The deployment configuration targets GitHub Pages at [rajasi-desai.github.io/Cambridge-Rentals](https://rajasi-desai.github.io/Cambridge-Rentals).
