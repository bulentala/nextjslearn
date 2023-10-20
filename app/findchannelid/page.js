"use client";
import React, { useState } from "react";
const API_KEY = "AIzaSyD8tAgjH9mE1injUVe0BzhZ-EsgiuGwYoQ";
const videoId = "Wta5DQv_EfA";
const ChannelId = () => {
  const [videoId, setVideoId] = useState("");
  const [channelId, setChannelId] = useState("");

  const fetchChannelId = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch video details");
      }

      const data = await response.json();
      const video = data.items[0];
      const channelId = video.snippet.channelId;
      setChannelId(channelId);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchChannelId();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={videoId}
          onChange={(e) => setVideoId(e.target.value)}
          placeholder='Enter Video ID'
        />
        <button type='submit'>Get Channel ID</button>
      </form>
      {channelId && <p>Channel ID: {channelId}</p>}
    </div>
  );
};

export default ChannelId;
