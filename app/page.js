"use client"; // app/page.js
import { useEffect, useState } from "react";

const getPlaylistItems = async (playlistId) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&maxResults=10`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch playlist items");
    }

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error fetching playlist items", error);
    return [];
  }
};

const Home = () => {
  const [playlistItems, setPlaylistItems] = useState([]);

  useEffect(() => {
    const fetchPlaylistItems = async () => {
      const playlistId = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ID;
      const items = await getPlaylistItems(playlistId);
      setPlaylistItems(items);
    };

    fetchPlaylistItems();
  }, []);

  return (
    <div>
      <h1>Youtube Playlist</h1>
      <ul>
        {playlistItems.map((item) => (
          <li key={item.id}>
            <img
              src={item.snippet.thumbnails.default.url}
              alt={item.snippet.title}
            />
            <p>{item.snippet.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
