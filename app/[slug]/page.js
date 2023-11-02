async function fetchYoutubeVideoData(videoId) {
  const apiKey = "AIzaSyD8tAgjH9mE1injUVe0BzhZ-EsgiuGwYoQ";
  // const videoId = "ZwajQ9ywgIU";
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

const VideoDetailsPage = async ({ params }) => {
  const videoId = await fetchYoutubeVideoData(params.id);
  return (
    <div>
      <pre>{JSON.stringify(videoId, null, 2)}</pre>
    </div>
  );
};

export default VideoDetailsPage;
