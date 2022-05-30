let mix = require('laravel-mix')

require('./nova.mix')


mix.js('resources/js/field.js', 'dist/js').vue({ version: 3 })
    .nova('juancamunozfp/nova-url-field')
    .webpackConfig({
        resolve: {
            symlinks: false
        }
    })
