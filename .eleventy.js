module.exports = config => {
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