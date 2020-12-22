// const smoothScroll = require("smoothscroll-polyfill");

module.exports = config => {
    // config.addPlugin(smoothScroll);

    config.addWatchTarget("./src/sass/");
    config.addPassthroughCopy("./src/css");
    config.addPassthroughCopy("./src/scripts");

    config.addCollection("photography", function (collection) {
        // Collect any items in the photography directory
        return collection.getFilteredByGlob("./src/photography/*.*").sort((a, b) => {
            // Sort these items
            if (a.data.title > b.data.title) return -1;
            else if (a.data.title < b.data.title) return 1;
            else return 0;
            // And reverse to start with earlier years first
        }).reverse();
    });


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