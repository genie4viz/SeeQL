module.exports = {
    plugins: [
        require('tailwindcss')('./app/javascript/stylesheets/tailwind.config.js'),
        require('postcss-import'),
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
            autoprefixer: {
                flexbox: 'no-2009'
            },
            tailwindcss: {},
            stage: 3
        }),
        require('autoprefixer')
    ]
}
