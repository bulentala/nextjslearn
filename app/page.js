"use client";
// pages/index.js
import { useEffect, useState } from "react";

const fetchPlaylistItems = async (playlistId, apiKey) => {
  const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);

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

const fetchVideoData = async (videoId, apiKey) => {
  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch video data");
    }

    const data = await response.json();
    return data.items[0];
  } catch (error) {
    console.error("Error fetching video data", error);
    return null;
  }
};

const HomePage = () => {
  const [playlistItems, setPlaylistItems] = useState([]);
  const [videoDataList, setVideoDataList] = useState([]);
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const playlistId = "PLBPVr0JQZNobnoYWApfoEi2qbuY3QRwTU"; // Oynatma listesi ID'si

  useEffect(() => {
    const fetchPlaylistAndVideoData = async () => {
      try {
        // Oynatma listesinden video ID'leri al
        const items = await fetchPlaylistItems(playlistId, apiKey);
        setPlaylistItems(items);

        // Her bir video için detaylı bilgileri al
        const videoDataPromises = items.map(async (item) => {
          const videoId = item.snippet.resourceId.videoId;
          return await fetchVideoData(videoId, apiKey);
        });

        const videosData = await Promise.all(videoDataPromises);
        setVideoDataList(videosData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchPlaylistAndVideoData();
  }, [playlistId, apiKey]);

  return (
    <div>
      <h1>Video List</h1>
      <ul>
        {videoDataList.map((videoData, index) => (
          <li key={index}>
            <h3>{videoData.snippet.title}</h3>
            <p>{videoData.snippet.description}</p>
            <p>Published At: {videoData.snippet.publishedAt}</p>
            <p>Channel: {videoData.snippet.channelTitle}</p>
            <pre>{JSON.stringify(videoData, null, 2)}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
