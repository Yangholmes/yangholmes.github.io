module.exports = {
    title: 'Yangholmes Blog',
    description: 'Yangholmes Blog',
    base: '/blog/',
    head: [
        ['link', {
            rel: 'icon',
            type: 'image/x-icon',
            href: './favicon.ico'
        }]
    ],
    themeConfig: {
        sidebar: {
            '/tech-articles/': [{
                title: '技术小文章',
                collapsable: false,
                children: [
                    'how-to-create-ex-tag/',
                    'playground/'
                ]
            }]
        }
    }
};
