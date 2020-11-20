module.exports = {
    /**
     * Returns back an array of every single year mentioned in data files
     */
    getAllRelevantYears(archibaldData, eventData) {
        let rawListOfYears = []

        archibaldData.forEach(function (item, index) {
            rawListOfYears.push(item.year)
        });

        eventData.forEach(function (item, index) {
            rawListOfYears.push(item.startYear)
        });

        // Remove duplicated years (via Set), 
        // Then convert back to an array (via Array.from)
        // Then sort (via .sort)
        const filteredListOfYears = Array.from(new Set(rawListOfYears)).sort()

        // Reorder array in chronological order
        console.log("List of years:", filteredListOfYears)
        return filteredListOfYears
    }
}