module.exports = {
    css: {
        loaderOptions: {
            sass: {
                // @ -> /src
                data: `
                    @import "@/assets/styles/test.scss";
                    @import "@/assets/styles/animation.scss";
                    @import "@/assets/styles/global.scss";
                `
            }
        }
    }
}