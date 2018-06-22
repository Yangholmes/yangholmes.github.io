module.exports = {
    title: 'Yangholmes Blog',
    description: 'Yangholmes Blog',
    base: '/blog/',
    head: [
        ['link', {
            rel: 'icon',
            href: 'http://yangholmes.github.io/assets/img/icon.png'
        }]
    ],
    themeConfig: {
        logo: 'http://yangholmes.github.io/assets/img/yangholmes.jpg',
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
                    'hello-vue-extends/',
                    'brainfuck/',
                    'why-atom/',
                    'playground/'
                ]
            }]
        }
    }
};
