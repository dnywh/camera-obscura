module.exports = config => {
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