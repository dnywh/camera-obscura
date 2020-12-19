// const smoothScroll = require("smoothscroll-polyfill");

module.exports = config => {
    // config.addPlugin(smoothScroll);

    config.addWatchTarget("./src/sass/");
    config.addPassthroughCopy("./src/css");
    config.addPassthroughCopy("./src/scripts");

    return {
        // Lets me use Nunjunks for everything
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        // Sets the directories
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};