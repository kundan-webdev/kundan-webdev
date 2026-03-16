move temp_next\* .\
move temp_next\.* .\
rmdir /S /Q temp_next
call npm install
call npx shadcn@latest init -d
call npm install framer-motion lucide-react
