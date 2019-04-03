console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.bandsInTown = {
  id: process.env.BANDS_IN_TOWN
};

exports.omdb = {
  id: process.env.OMDB_ID
};