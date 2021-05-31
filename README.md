# CV Composer

This is an experimental project to construct and statically-publish a client-side Single Page Application (SPA).

The SPA dynamically composes PDF CVs using [example data](./src/data.ts) from my career history to be previewed in the page and optionally downloaded.

The project is written in Typescript using NextJS, React and my own state-management solution [@lauf/lauf-store](https://www.npmjs.com/package/@lauf/lauf-store).

The resulting SPA is published to https://cefn.com/cv where it can be demonstrated in a Chrome browser. Multi-platform support or fully responsive controls to target e.g. Mobile, Tablet is unlikely for this experimental testing ground.

## Reference commands

Run a local dev version
`yarn run dev`

Build and export the static pages
`npx next build`
`npx next export`

Preview the exported pages locally
`sh -c "cd out && python3 -m http.server 8000"`

Upload manually
`rsync -e ssh --recursive out/ user@domain.com:/path/to/folder/`
