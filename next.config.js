const sitemap = require('nextjs-sitemap-generator')

sitemap({   
    baseUrl: process.env.DOMAIN,  
    pagesDirectory: __dirname + process.env.PAGES_PATH,  
    targetDirectory : __dirname + process.env.PUBLIC_PATH,
    nextConfigPath: __dirname + "\\next.config.js"
})

module.exports = {
    webpack: (config, { dev }) => {
        if (dev) {
            config.module.rules.push({
                test: /\.js$/,
                exclude: /node_modules/
            })
        }
        return config
    },
    exportPathMap: () => {
        return {
          '/': { page: '/' }
        }
    }
}
