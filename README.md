# cvnext

NextJs version of dynamic PDF CV

Export...
`npx next build`
`npx next export`
Preview
sh -c "cd out && python3 -m http.server 8000"
Upload
`rsync -e ssh --recursive out/ cefn@cefn.com:/var/www/html/cefn.com/cv/`
