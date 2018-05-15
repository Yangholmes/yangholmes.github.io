# first, build the blog
npm run blog:build

# second, move dist into blog directory
cp -f -r ./blog-dev/.vuepress/dist/* ./blog
