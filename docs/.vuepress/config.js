module.exports = {
    base: '/note/',
    title: 'Note',
    description: '随便记记',
    head: [['link', { rel: 'icon', href: '/logo.png' }]],
    themeConfig: {
        repo: 'GreenHandLittleWhite/note',
        docsDir: 'docs',
        sidebarDepth: 3,
        nav: [
            {
                text: 'note',
                link: '/text/'
            }
        ],
        sidebar: {
            '/text/': [
                {
                    title: 'Note',
                    children: ['', 'JavaScript', '框架', 'Vue', 'React', 'Node', '通识']
                }
            ]
        }
    }
};
