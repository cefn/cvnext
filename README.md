# CV Composer

This experimental project dynamically composes PDF CVs using [example data](./src/data.ts) from my career history.

Visitors are invited to select a summarisation level, preferred document length and relative priority of different disciplines.

The resulting PDF can be previewed dynamically in the page and optionally downloaded.

To experiment, please use a desktop Chrome browser. A snapshot of the SPA is published at https://cefn.com/cv

A standard PDF CV without filtering or summarisation is available at https://cefn.com/blog/files/cv.pdf

The project is written in Typescript using NextJS, React and my own state-management solution [@lauf/store](https://www.npmjs.com/package/@lauf/store). It is published as a static, purely-client-side Single Page Application.

Multi-platform support (any non-Chrome, non-Firefox or mobile browsers) is unlikely and not worth it for this experimental testing ground.

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
