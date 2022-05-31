let mix = require('laravel-mix');
let path = require('path');


mix.js('resources/js/field.js', 'dist/js').vue({ version: 3 })
    .alias({
        'laravel-nova': path.join(__dirname, 'vendor/laravel/nova/resources/js/mixins/packages.js'),
    })
    .webpackConfig({
        externals: {
            vue: 'Vue',
        },
        output: {
            uniqueName: 'inspheric/nova-url-field',
        },
    })
