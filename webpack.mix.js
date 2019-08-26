const mix = require('laravel-mix');

mix
    .sass('sass/app.scss', 'css')
    .browserSync({
        proxy: 'atomicsass.test',
        files: [
            'css/*.css',
            'index.html',
        ],
        notify: false,
    })
    .disableNotifications();