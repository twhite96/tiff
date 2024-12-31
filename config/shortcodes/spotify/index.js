const outdent = require('outdent')({ newline: ' ' });

const spotifyAlbum = (id, album) => {
  return outdent`
    <div class="spotify-wrapper">
        <iframe src="https://open.spotify.com/embed/${album}/${id}?utm_source=generator"
            frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
        </iframe>
    </div>`;
}
const spotifyPlaylist = (id, playlist) => {
  return outdent`
    <div class="spotify-wrapper">
        <iframe src="https://open.spotify.com/embed/${playlist}/${id}?utm_source=generator"
            frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
        </iframe>
    </div>`;
}
const spotifyTrack = (id, track) => {
  return outdent`
    <div class="spotify-wrapper">
        <iframe src="https://open.spotify.com/embed/${track}/${id}?utm_source=generator"
            frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
        </iframe>
    </div>`;
}

// module.exports = (id) => {
//   return outdent`
//     <div class="video-wrapper">
//         <iframe src="https://open.spotify.com/embed/${id}"
//             frameborder="0" allowfullscreen       
//             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
//         </iframe>
//     </div>`;
// };


module.exports = {
  spotifyAlbum,
  spotifyPlaylist,
  spotifyTrack
}