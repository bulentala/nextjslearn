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
              <div>{video.snippet.title}</div>
              <div>{video.snippet.publishedAt}</div>
              <div>{video.snippet.thumbnails.default.url}</div>
              <div>{video.snippet.channelTitle}</div>
              <div>{video.snippet.statistics}</div>
              <div>{video.statistics.viewCount}</div>
              <div>{video.statistics.likeCount}</div>
              <div>{video.statistics.favoriteCount}</div>
            </div>
          );
        });
      })}
    </>
  );
};

export default HomePage;
