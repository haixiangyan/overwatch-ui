module.exports = {
    css: {
        loaderOptions: {
            sass: {
                // @ -> /src
                data: `
                    @import "@/assets/styles/global.scss";
                    @import "@/assets/styles/test.scss";
                `
            }
        }
    }
}