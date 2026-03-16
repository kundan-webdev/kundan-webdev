mkdir _old_vite
move src _old_vite\
move public _old_vite\
move package.json _old_vite\
move package-lock.json _old_vite\
move index.html _old_vite\
move vite.config.js _old_vite\
move eslint.config.js _old_vite\
call npx -y create-next-app@latest temp_next --typescript --eslint --tailwind --app --src-dir false --import-alias "@/*" --use-npm
move temp_next\* .\
move temp_next\.* .\
rmdir temp_next
