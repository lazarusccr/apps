document.apps = [
    {
        name: 'LazPaint',
        description: 'Raster image editor with layers, tools and filters',
        url: 'http://bgrabitmap.github.io/lazpaint/',
        icon: 'lazpaint.png',
        tags: '3d, 2d, editor, paint, photo, png, jpg'
    },
    {
        name: 'Greenfish Icon Editor Pro',
        description: 'Powerful image editor for creating icons, cursors, animations and icon libraries',
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
        name: 'Advanced Wget GUI (AWGG)',
        description: 'Download manager',
        url: 'https://sites.google.com/site/awggproject/',
        icon: 'awgg.png',
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
        description: 'Text editor with syntax highlighting and code completion',
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
    },
    {
        name: 'Double Commander',
        description: 'File manager with two panels side by side',
        url: 'https://doublecmd.sourceforge.io/',
        icon: 'doublecommander.png',
        tags: 'explorer'
    },
    {
        name: 'PeaZip',
        description: 'File archiver utility, based on technologies of 7-Zip, p7zip, FreeArc, PAQ, and PEA projects',
        url: 'http://www.peazip.org/',
        icon: 'peazip.png',
        tags: 'compression'
    },
    {
        name: 'LazEdit',
        description: 'General text editor with syntax highlighting and tools to help edit HTML',
        url: 'http://wiki.lazarus.freepascal.org/LazEdit',
        icon: 'lazarus.png',
        tags: 'code, development'
    },
    {
        name: 'MiniEdit',
        description: 'Application for editing files like PHP, HTML, CSS, Python, D, C and Pascal',
        url: 'https://github.com/parmaja/miniedit',
        icon: 'miniedit.png',
        tags: 'code, text, editor, development'
    },
    {
        name: 'Virtual Magnifying Glass',
        description: 'Screen magnification tool',
        url: 'http://magnifier.sourceforge.net/',
        icon: 'virtualmagnifyingglass.png',
        tags: 'zoom, accessibility'
    },
    {
        name: 'OvoPlayer',
        description: 'Music manager and player',
        url: 'http://ovoplayer.altervista.org/home',
        icon: 'ovoplayer.png',
        tags: 'multimedia, audio, sound'
    },
    {
        name: 'ZCAD',
        description: 'Simple CAD program with dxf2000 file format support',
        url: 'https://sourceforge.net/projects/zcad/',
        icon: 'zcad.png',
        tags: 'industrial, 3d, 2d'
    },
    {
        name: 'Sky Chart',
        description: 'Draw chart of the night sky for the amateur astronomer from a bunch of stars and nebulae catalogs',
        url: 'https://sourceforge.net/projects/skychart/',
        icon: 'skychart.png',
        tags: ''
    },
    {
        name: 'Virtual Moon Atlas',
        description: 'Moon observation and survey, let you visualize the real Moon aspect at every time',
        url: 'https://sourceforge.net/projects/virtualmoon/',
        icon: 'virtualmoonatlas.png',
        tags: ''
    },
    {
        name: 'Virtual Planet Atlas',
        description: 'Visualize any planet aspect at any time',
        url: 'https://sourceforge.net/projects/virtualplanet/',
        icon: 'virtualplanetatlas.png',
        tags: ''
    },
    {
        name: 'Promet-ERP',
        description: 'Management system for contacts, messages, documents, orders and projects',
        url: 'http://free-erp.de/wiki/Promet-ERP/index',
        icon: 'prometerp.png',
        tags: ''
    },
    {
        name: 'Eschecs',
        description: 'Chess game',
        url: 'http://www.eschecs.fr/',
        icon: 'eschecs.png',
        tags: ''
    },
    {
        name: 'Stimulus Control',
        description: 'A teaching machine for free behavioral experiments',
        url: 'https://github.com/cpicanco/stimulus_control',
        icon: 'stimuluscontrol.png',
        tags: ''
    }
].sort(function (a, b) {
    if (a.name > b.name)
        return 1
    if (a.name < b.name)
        return -1
    return 0
})
