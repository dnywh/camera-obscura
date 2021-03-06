module.exports = {
    /**
   * Returns whether or not the homepage is the active page
   * Then hides this as an option in the header
   *
   * @param {String} itemUrl The link in question
   * @param {String} pageUrl The page context
   * @returns {String} The attributes or empty
   */
    getLinkHomeBehavior(itemUrl, pageUrl) {
        let response = "";

        if (itemUrl === "/" && itemUrl === pageUrl) {
            response = ' class="hidden"';
        }

        return response;
    },


    /**
   * Returns back some attributes based on whether the
   * link is active or a parent of an active item
   *
   * @param {String} itemUrl The link in question
   * @param {String} pageUrl The page context
   * @returns {String} The attributes or empty
   */
    getLinkActiveState(itemUrl, pageUrl) {
        let response = "";

        if (itemUrl === pageUrl) {
            response = ' aria-current="page" class="active"';
        }

        if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
            response += ' data-state="active"';
        }

        return response;
    },
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
        // console.log("List of years:", filteredListOfYears)
        return filteredListOfYears
    },

    /**
     * TODO
     * Returns back an array of objects: year, any relevant descriptions, and how 'fresh' they are
     */
    getAllEventDesc(eventData) {
        let mainArray = []

        eventData.forEach(el => {
            let amountOfYearsWithGeneralDesc = 0
            let yearNumbersWithGeneralDesc = []

            if (el.endYear) {
                // Calc amount of years with general description
                // amountOfYearsWithGeneralDesc = el.endYear - el.startYear
                amountOfYearsWithGeneralDesc = (el.endYear - el.yearsDeclineFromMainstream) - (el.startYear + el.yearsToMainstream)
                if (el.yearsToMainstream && el.yearsDeclineFromMainstream) {
                    amountOfYearsWithGeneralDesc = (el.endYear - el.yearsDeclineFromMainstream) - (el.startYear + el.yearsToMainstream)
                } else if (el.yearsToMainstream && !el.yearsDeclineFromMainstream) {
                    amountOfYearsWithGeneralDesc = el.endYear - (el.startYear + el.yearsToMainstream)
                } else {
                    amountOfYearsWithGeneralDesc = el.endYear - el.startYear
                }
                // console.log(amountOfYearsWithGeneralDesc)

                // Spit these year numbers out
                for (let i = 0; i < amountOfYearsWithGeneralDesc; i++) {
                    const yearToPush = el.startYear + i
                    // console.log("Adding:", yearToPush)
                    yearNumbersWithGeneralDesc.push(yearToPush, el.desc)

                    const yearObj = {
                        year: yearToPush,
                        desc: el.desc
                    }

                    mainArray.push(yearObj)
                }

                // console.log(yearNumbersWithGeneralDesc)
                // console.log(mainArray)
            }

        });
        return mainArray


    }
}