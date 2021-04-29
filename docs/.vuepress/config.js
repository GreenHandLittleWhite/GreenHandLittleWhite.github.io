module.exports = {
    base: '',
    title: 'Note',
    description: 'my note',
    head: [['link', { rel: 'icon', href: '/logo.png' }]],
    themeConfig: {
        home: '/',
        repo: 'GreenHandLittleWhite/note',
        docsDir: 'docs',
        sidebarDepth: 3,
        sidebar: [
            [
                '/',
                'Welcome'
            ],
            {
                title: 'Note',
                children: [
                    ['/note/JavaScript', 'JavaScript'],
                    ['/note/框架', '框架'],
                    ['/note/Vue', 'Vue'],
                    ['/note/React', 'React'],
                    ['/note/Node', 'Node'],
                    ['/note/通识', '通识'],
                    ['/note/HTTP', 'HTTP']
                ]
            }
        ]
    }
};
