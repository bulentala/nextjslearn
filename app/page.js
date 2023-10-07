"use client";
// pages/youtube.js
import React, { useState, useEffect } from "react";

const Youtube = () => {
  const [videos, setVideos] = useState([]);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchYoutubeData = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your actual YouTube Data API key
        const apiKey = "AIzaSyCNjPUyB7TwEQNFkDxdV-fM-OXzg1LwkSM";
        const playlistId = "PLBPVr0JQZNobnoYWApfoEi2qbuY3QRwTU";

        // Fetch videos from the YouTube Data API
        const playlistResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}`
        );

        // Check if the request was successful
        if (playlistResponse.ok) {
          // Parse the response as JSON
          const playlistData = await playlistResponse.json();

          // Extract video items from the playlist response
          const videoItems = playlistData.items;

          // Create an array to store details of each video
          const videoDetails = [];

          // Fetch details for each video using its ID
          for (const video of videoItems) {
            const videoId = video.snippet.resourceId.videoId;
            const videoDetailResponse = await fetch(
              `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`
            );

            if (videoDetailResponse.ok) {
              const videoDetailData = await videoDetailResponse.json();
              videoDetails.push(videoDetailData.items[0]);
            } else {
              console.error(
                "Error fetching YouTube video details:",
                videoDetailResponse.status,
                videoDetailResponse.statusText
              );
            }
          }

          // Set the videos state with the details of each video
          setVideos(videoDetails);
        } else {
          console.error(
            "Error fetching YouTube playlist data:",
            playlistResponse.status,
            playlistResponse.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching YouTube data:", error);
      }
    };

    // Call the fetch function
    fetchYoutubeData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api");
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const allData = apiData &&
    videos && [
      {
        kind: apiData.kind,
        title: apiData.snippet.title,
        publishedAt: apiData.snippet.publishedAt,
        description: apiData.snippet.description,
        channelTitle: apiData.snippet.channelTitle,
      },
      ...videos.map((video) => ({
        kind: apiData.kind,
        title: video.snippet.title,
        publishedAt: video.snippet.publishedAt,
        description: video.snippet.description,
        channelTitle: video.snippet.channelTitle,
      })),
    ];

  return (
    <div>
      {allData.map((data, i) => {
        return <div key={i}>{data.title}</div>;
      })}
    </div>
  );
};

export default Youtube;
