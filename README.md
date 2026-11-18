# For Ai — The Girl Who Deserves the Whole Universe

A small, responsive digital love letter for Namira Kayla Aurelia (Ai / Aurel), made for Princess Day on November 18, 2026. It is meant to feel like a personal journal: a quiet opening, a letter, small reminders, two early memories, her Northern Lights dream, and a final note she can open when she is ready.

## Open it locally

This is a dependency-free static site. Node.js 20 or later is enough to serve it locally:

```sh
npm start
```

Then visit `http://127.0.0.1:4173`. The static checks can be run with `npm run check`.

## What is included

- An opening screen that reveals the site after a tap or click.
- A personal, original letter and ten interactive reassurance cards.
- A gentle daily reminder, twenty individual reasons, and a timeline with room for future memories.
- An animated aurora and snowfall scene, plus interactive cards inspired by sushi, pizza, noodles, dim sum, matcha, pink flowers, snow, and the Northern Lights.
- A rotating collection of comforting notes and a final letter that opens on request.
- A user controlled, original ambient tone built with the Web Audio API. Sound never starts without a tap or click.
- Keyboard focus styling, a skip link, semantic landmarks, responsive layouts, reduced-motion support, and metadata for sharing.

## Imagery and type

Photographs are requested from Unsplash's image CDN and are credited here with links to the original photo pages. Unsplash describes these photos as free to use under the [Unsplash License](https://unsplash.com/license). The page uses the image CDN's resize and format parameters so it can deliver appropriately sized images; an internet connection is needed for photos and the optional Google Fonts.

- Pink rose bouquet, photographed by [OC Gonzalez](https://unsplash.com/photos/close-up-photography-of-pink-rose-flowers-bouquet-suut8UhIoZo).
- Pink cherry blossoms, photographed by [Nick Augustat](https://unsplash.com/photos/delicate-pink-cherry-blossoms-on-a-branch-S1V_SUfVZAM).
- Aurora above a snowy mountain, photographed by [Jonatan Pie](https://unsplash.com/photos/snow-mountain-with-aurora-borealis-EvKBHBGgaUo).
- Display and body type are [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) and [DM Sans](https://fonts.google.com/specimen/DM+Sans), served by Google Fonts with system-font fallbacks.

## Publishing

The repository includes a GitHub Actions workflow in `.github/workflows/pages.yml`. After the project is pushed to the `main` branch of a public GitHub repository with Pages enabled for GitHub Actions, each push publishes the root folder as a static site. No build command, secrets, server, or third-party JavaScript package is needed.

The pages workflow is designed for the repository `for-ai-princess-day`. With the standard project-site address, the public URL is `https://<github-account>.github.io/for-ai-princess-day/`.

## Privacy and security

The site contains only the personal details intentionally included for this gift. It has no forms, trackers, analytics, external APIs, login, stored personal data, or credentials. The small preview server binds to `127.0.0.1` and only serves files from this project folder.
