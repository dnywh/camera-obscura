# Camera Obscura

> The photographer’s way of seeing is reflected in his choice of subject. The painter’s way of seeing is reconstituted by the marks he makes on the canvas or paper. Yet, although every image embodies a way of seeing, our perception or appreciation of an image depends also upon our own way of seeing.

— John Berger

## Data

Two data files:

- archibald.json
- events.json

### Events data

Example, annotated, item within events.json:

```js
{
    "startYear": 1956, // The year this event kicked off (required)
    "startDes": "Cameras become more prevalent in society, as does film development", // (required only if `startYear` is set)
    "desc": "Mainstream film photography", // The general description of this event (required)
    "endYear": 2000, // (optional)
    "endDesc": "Film cameras slowly become superseded by digital ones", // (optional)
    "yearsToMainstream": 10, // How many years this event took to have an affect on society (required only if 'endYear' is set)
    "yearsDeclineFromMainstream": 6 // How many years it took for this event to have its effects diminished or superseded (required only if 'endDesc' is set)
},
```

## Todo

### Showing data

- [x] Make a helper that gets a dynamic list of years across data files and spits out usable list of unique, ordered, years
- [ ] Improve this helper so that _ranges_ of years (e.g. ranges of `startYear` to `endYear`) are included
- [x] Use that helpers to architect the 'spine' of the index page
- [ ] Make each spine vertebra (`li`) intelligent enough to use either the `startDes`, `desc`, or `endDesc`
- [ ] Have Archibald and Event data unfurl on either side of that spine accordingly

### Styling

- [ ] Prototype horizontal layout
