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
        sidebar: [
            '/playground/',
            '/vuepress-test/'
        ]
    }
};
