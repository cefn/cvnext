# cvnext

NextJs version of dynamic PDF CV.

See a hosted snapshot at https://cefn.com/cv

Run local dev version
`yarn run dev`

Export...
`npx next build`
`npx next export`

Preview Export
`sh -c "cd out && python3 -m http.server 8000"`

Upload
`rsync -e ssh --recursive out/ user@domain.com:/path/to/folder/`
