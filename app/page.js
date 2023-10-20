"use client";
const API_KEY = "AIzaSyD8tAgjH9mE1injUVe0BzhZ-EsgiuGwYoQ";
const VIDEO_ID = "Wta5DQv_EfA";
import React, { useState, useEffect } from "react";

const Channels = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const apiKey = "AIzaSyD8tAgjH9mE1injUVe0BzhZ-EsgiuGwYoQ";

    fetch("https://www.googleapis.com/youtube/v3/channels", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      params: {
        part: "snippet,statistics",
        q: "next.js",
        type: "channel",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setChannels(data.items);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul>
      {channels.map((channel) => (
        <li key={channel.id}>
          <a href={channel.snippet.channelUrl}>{channel.snippet.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Channels;
