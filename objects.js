var playlist = { artistName : "songTitle" }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
<<<<<<< HEAD
  delete playlist[artistName]
=======
  delete playlist.artistName
>>>>>>> e8ef28a09ce9fdd6a85c0d9f750c4ad46384c52f
  return playlist
}
