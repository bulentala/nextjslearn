"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
const API_KEY = "AIzaSyD8tAgjH9mE1injUVe0BzhZ-EsgiuGwYoQ";

const fetchVideos = async () => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=1&key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch videos");
    }
    const data = await response.json();
    const videos = data.items;
    return videos;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const Page = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideoData = async () => {
      const fetchedVideos = await fetchVideos();
      setVideos(fetchedVideos);
    };

    fetchVideoData();
  }, []);

  return (
    <div>
      {videos.map((video) => (
        <div key={video.id}>
          <pre>{JSON.stringify(video, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
};

export default Page;
