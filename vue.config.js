const karmaConfig = require('./karma.config')
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/overwatch-ui/'
        : '/',
    css: {
        loaderOptions: {
            sass: {
                // @ -> /src
                data: `
                    @import "@/assets/styles/global.scss";
                    @import "@/assets/styles/reset.scss";
                `
            }
        }
    },
    configureWebpack: {
        performance: {
            hints: false
        },
        optimization: {
            splitChunks: {
                minSize: 10000,
                maxSize: 250000,
            }
        }
    },
    pluginOptions: {
        karma: {
            /**
             * Takes an object with keys `port` (a Number) and `setup` (a function
             * taking an express App object). You can use this to set up an
             * Express server that will run alongside your tests.
             */
            expressServer: undefined,

            /**
             * If provided, this will be merged into the base karma config for
             * the plugin.
             *
             * See: https://github.com/webpack-contrib/karma-webpack and
             * http://karma-runner.github.io/2.0/config/configuration-file.html
             */
            karmaConfig: karmaConfig
        }
    }
}