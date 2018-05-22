# first, build the blog
npm run blog:build

# second, remove all files and folders in ./blog

# third, move dist into blog directory
cp -f -r ./blog-dev/.vuepress/dist/* ./blog
