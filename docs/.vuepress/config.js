const themeConfig = require('./themeConfig.js')
module.exports = {
    title: '葵花宝典',
    description: '专注前端开发技术积累,积硅步,至千里',
    keywords: "贺俊兰博客", // 关键字
    evergreen: true,
    theme: 'reco',

    head: [
        [
            'link', {
                rel: 'icon',
                href: './public/timg.gif'
            }
        ],
        [
            'meta', {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,user-scalable=no'
            }
        ]
    ],
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: themeConfig,
    displayAllHeaders: false,
    plugins: [
        [
            "ribbon",
            {
                size: 90,     // width of the ribbon, default: 90
                opacity: 0.3, // opacity of the ribbon, default: 0.3
                zIndex: -1    // z-index property of the background, default: -1
            }
        ],
        [
            "cursor-effects",
            {
                size: 2,                    // size of the particle, default: 2
                shape: ['star'],  // shape of the particle, default: 'star'
                zIndex: 999999999           // z-index property of the canvas, default: 999999999
            }
        ],
        [
            "@vuepress-reco/vuepress-plugin-kan-ban-niang",
            {
                theme: ['haruto'],
                clean: true
            }
        ]
    ]
}