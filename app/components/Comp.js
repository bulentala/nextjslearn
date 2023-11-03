async function getData() {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${process.env.YOUTUBE_PLAYLIST_Id}&key=${process.env.YOUTUBE_API_Key}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Comp = async () => {
  const data = await getData();
  return <>deneme</>;
};

export default Comp;
