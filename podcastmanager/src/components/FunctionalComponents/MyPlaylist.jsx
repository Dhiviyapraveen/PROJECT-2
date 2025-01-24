import React from "react";

function MyPlaylist({ playlist }) {
  return (
    <div className="playlist-page">
      <h2>My Playlist</h2>
      {playlist.length === 0 ? (
        <p>No podcasts added to the playlist yet!</p>
      ) : (
        <div className="podcast-list">
          {playlist.map((podcast) => (
            <div key={podcast.id} className="podcast-card">
              <h3>{podcast.title}</h3>
              <audio controls>
                <source src={podcast.src} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyPlaylist;
