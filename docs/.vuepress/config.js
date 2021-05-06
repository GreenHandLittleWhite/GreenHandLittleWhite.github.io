module.exports = {
    base: '',
    title: 'Note',
    description: 'my note',
    head: [['link', { rel: 'icon', href: '/logo.png' }]],
    themeConfig: {
        home: '/',
        repo: 'GreenHandLittleWhite/GreenHandLittleWhite.github.io',
        docsDir: 'docs',
        sidebarDepth: 3,
        sidebar: [
            ['/', 'Welcome'],
            {
                title: 'Note',
                children: [
                    ['/note/JavaScript', 'JavaScript'],
                    ['/note/Frame', '框架'],
                    ['/note/Vue', 'Vue'],
                    // ['/note/React', 'React'],
                    // ['/note/Node', 'Node'],
                    ['/note/HTTP', 'HTTP'],
                    ['/note/Browser', '浏览器'],
                    ['/note/General', '通识']
                ]
            }
        ]
    }
};
