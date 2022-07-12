@echo off
npm run build&&cd dist&&git init&&git add -A&&git commit -m 'deploy'&&git push -f https://github.com/egdabarrios/egdabarrios.github.io.git master&&cd ..