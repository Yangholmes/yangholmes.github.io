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
        lastUpdated: 'Last Updated',
        nav: [{
            text: '技术小文章',
            link: '/tech-articles/'
        }, {
            text: '我的简历',
            link: 'http://yangholmes.github.io/playground/resume/'
        }],
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
