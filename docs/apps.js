var apps = [
    {
        name: 'LazPaint',
        description: 'Raster image editor with layers, tools and filters',
        url: 'http://bgrabitmap.github.io/lazpaint/',
        icon: 'lazpaint.png',
        tags: '3d, 2d, editor, paint, photo, png, jpg'
    },
    {
        name: 'Greenfish Icon Editor Pro',
        description: 'Powerful open source image editor for creating icons, cursors, animations and icon libraries',
        url: 'http://greenfishsoftware.org/gfie.php#apage',
        icon: 'greenfishiconeditor.png',
        tags: '2d, editor, paint, photo, png, jpg, icon'
    },
    {
        name: 'Advanced Password Generator',
        description: 'Lightweight password generator tool to protect your security with randomly generated password',
        url: 'https://sourceforge.net/projects/apwg/',
        icon: 'advancedpasswordgenerator.png',
        tags: ''
    },
    {
        name: 'Ancestromania',
        description: 'Genealogy software that can import and export to Gedcom, to Geneanet and web site',
        url: 'https://ancestromania.net/index.php?page=&lng=en',
        icon: 'ancestromania.png',
        tags: ''
    },
    {
        name: 'Advanced Wget GUI (AWWG)',
        description: 'Cross platform and multilanguage download manager',
        url: 'https://sites.google.com/site/awggproject/',
        icon: 'awwg.png',
        tags: ''
    },
    {
        name: 'Bilancio Facile',
        description: 'Manage the family budget with ease',
        url: 'http://www.magicdev.org/en/?noredirect=en_GB',
        icon: 'bilanciofacile.png',
        tags: 'money'
    },
    {
        name: 'CudaText',
        description: 'Cross platform text editor with syntax highlighting and code completion',
        url: 'http://uvviewsoft.com/cudatext/',
        icon: 'cudatext.png',
        tags: 'code, development'
    },
    {
        name: 'LazLock',
        description: 'Password manager for Windows & GNU/Linux that encrypts your data with 128 bit AES encryption',
        url: 'https://sourceforge.net/projects/lazlock/',
        icon: 'lazlock.png',
        tags: 'security'
    }
]

apps.sort((a, b) => {
    if (a.name > b.name)
        return 1
    if (a.name < b.name)
        return -1
    return 0
})
