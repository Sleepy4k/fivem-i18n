--// FX Information \\--
fx_version   'adamant'
use_fxv2_oal 'no'
lua54        'yes'
game         'gta5'

--// Resource Information \\--
name         'NKCore I18N'
author       'Benjamin4k'
version      '1.0.0'
repository   'https://github.com/naka-studios/NKCore'
description  'NKCore Game Internationalization'

--// Manifest \\--
dependencies {
    '/server:5148',
    '/onesync',
    '/gameBuild:security'
}

shared_scripts {
	'config/config.lua',
	'shared/main.lua',
	'translations/*.lua',
}

client_scripts {
	'client/*.lua',
	'client/prod/*.lua'
}

server_scripts {
	'server/*.lua',
	'server/prod/*.lua'
}

ui_page {
	'gui/index.html'
}

files {
    'gui/index.html',
    'gui/css/*.*',
    'gui/js/*.*',
}