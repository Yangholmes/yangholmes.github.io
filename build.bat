@echo first, build the blog
call npm run blog:build

@echo second, remove all files and folders in ./blog
del .\blog\* /Q

@echo third, move dist into blog directory
xcopy .\blog-dev\.vuepress\dist\* .\blog /E /Y
