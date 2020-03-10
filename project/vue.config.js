module.exports = {
    publicPath:"/",
    css: {
        loaderOptions: {
          less: {
            data: `
              @import "@/assets/scss/global.scss";
              `
          }
        }
      },
} 