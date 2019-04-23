
@echo on

setlocal

call npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/SharpSeeEr/resume.git master:gh-pages

rmdir /s /q .git
cd ..
