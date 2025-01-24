import React from "react";

const samplePodcasts = [
  { id: 1, title: "Podcast 1", src: "/podacast1.mp3" },
  { id: 2, title: "Podcast 2", src: "/podacast2.mp3" },
  { id: 3, title: "Podcast 3", src: "/podacast3.mp3" },
  { id: 4, title: "Podcast 4", src: "/podacast4.mp3" },
  { id: 5, title: "Podcast 5", src: "/podacast5.mp3" },
  { id: 6, title: "Podcast 6", src: "/podacast6.mp3" },
  { id: 7, title: "Podcast 7", src: "/podacast7.mp3" },
  { id: 8, title: "Podcast 8", src: "/podacast8.mp3" },
];

function PodcastPage({ addToPlaylist }) {
  return (
    <div className="podcast-page">
      <h2>Podcasts</h2>
      <div className="podcast-list">
        {samplePodcasts.map((podcast) => (
          <div key={podcast.id} className="podcast-card">
            <h3>{podcast.title}</h3>
            <audio controls>
              <source src={podcast.src} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <button
              className="add-to-playlist"
              onClick={() => addToPlaylist(podcast)}
            >
              Add to Playlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PodcastPage;
