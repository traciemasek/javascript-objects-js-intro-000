var playlist = { artistName: "songTitle" };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = "songTitle";
<<<<<<< HEAD
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
=======
  return playlist
>>>>>>> d9dc6f3519e2bca2546ca23ec39443530d31c451
}