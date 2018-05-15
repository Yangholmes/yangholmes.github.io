echo first, build the blog
call npm run blog:build

echo second, move dist into blog directory
xcopy .\blog-dev\.vuepress\dist\* .\blog /E /Y
