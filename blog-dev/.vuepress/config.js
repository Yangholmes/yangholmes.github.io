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
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo: 'http://yangholmes.github.io/assets/img/yangholmes.jpg',
        lastUpdated: 'Last Updated',
        nav: [{
            text: '技术小文章',
            link: '/tech-articles/'
        }, {
            text: '小派的折腾日记',
            link: '/arm-linux/'
        }],
        //  {
        //     text: '我的简历',
        //     link: 'http://yangholmes.github.io/playground/resume/'
        // }],
        sidebar: {
            '/tech-articles/': [{
                title: '技术小文章',
                collapsable: false,
                children: [
                    'how-to-create-ex-tag/',
                    'hello-vue-extends/',
                    'brainfuck/',
                    'why-atom/',
                    'my-code-style/',
                    'debounce-throttle/',
                    'playground/'
                ]
            }],
            '/arm-linux/': [{
                title: '小派的折腾日记',
                collapsable: true,
                children: [
                    // 'how-to-modify-img-mirror/',
                    // 'use-vim/',
                    // 'how-to-use-ssh/',
                    // 'how-to-use-gpio-in-node/',
                    // 'access-permissions/',
                    'how-gcc-works/',
                    'c-main-function/'
                ]
            }]
        }
    }
};
