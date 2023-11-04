import { EyeOpenIcon, HeartIcon, PersonIcon } from "@radix-ui/react-icons";

import moment from "moment";
async function getPlaylistData() {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${process.env.YOUTUBE_PLAYLIST_ID}&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  const videoIds = data.items.map((item) => item.snippet.resourceId.videoId);
  return videoIds;
}

async function getSingleVideoData(videoId) {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=player,localizations,topicDetails,status,statistics,snippet,contentDetails&id=${videoId}&key=${process.env.YOUTUBE_API_KEY}`
  );
  return res.json();
}

const HomePage = async () => {
  const videoIds = await getPlaylistData();
  const videoData = await Promise.all(videoIds.map(getSingleVideoData));
  return (
    <>
      {videoData.map((videos) => {
        return videos.items.map((video) => {
          return (
            <div key={video.id}>
              {video.snippet.title}
              {moment(video.snippet.publishedAt).format("MMM YY")}
              <PersonIcon />
              {video.snippet.channelTitle}
              <EyeOpenIcon />
              {video.statistics.viewCount}
              <HeartIcon />
              {video.statistics.likeCount}
            </div>
          );
        });
      })}
    </>
  );
};

export default HomePage;
