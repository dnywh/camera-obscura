// import Flickr from '..';

/**
 * This example demonstrates how to use public REST API methods:
 * https://www.flickr.com/services/api/
 * https://www.flickr.com/services/api/flickr.photos.search.html
 */

// create a new Flickr API client. since we're requesting a
// resource that doesn't require user authentication, we can
// just use our API key.

const Flickr = require('flickr-sdk');


// const F = new Flickr({
//     consumer_key: process.env.FLICKR_CONSUMER_KEY,
//     consumer_secret: process.env.FLICKR_CONSUMER_SECRET
// });

// create a new feeds instance
const feeds = new Flickr.Feeds();

// get the most recent public photos
feeds.publicPhotos().then(function (res) {
    console.log(res.body);
}, function (err) {
    console.log('got error', err.message);
});

// var flickr = new Flickr(process.env.FLICKR_API_KEY);

// // call the flickr.photos.search API method and search the photos!

// flickr.photos.search({
//     text: 'doggo'
// }).then(function (res) {
//     console.log('yay!', res.body.photos.photo);
// }).catch(function (err) {
//     console.error('bonk', err);
// });