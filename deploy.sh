yarn build &&
git checkout users &&
rm -rf *.html *.js *.css *.png &&
mv dist/* ./&&
rm -rf dist;
git add . &&
git commit -m 'update' &&
git push && 
git checkout -
