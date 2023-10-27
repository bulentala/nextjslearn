const Comp = async ({ playlistId }) => {
  async function getData() {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const maxResults = 10;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}&maxResults=${maxResults}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  }
  const data = await getData();
  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {data.items.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.snippet.title}</div>
            <div>{item.snippet.videoOwnerChannelTitle}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Comp;
