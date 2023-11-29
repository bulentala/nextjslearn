const youtubePlaylistId = process.env.YOUTUBE_PLAYLIST_ID;
const youtubeApiKey = process.env.YOUTUBE_API_KEY;

async function youtubePlaylistData() {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${youtubePlaylistId}&key=${youtubeApiKey}`);
    return response.json();
}

async function youtubeSingleVideoData(playlistData) {
    const videoIds = playlistData.items.map(item => item.id.videoId);
    console.log(videoIds)
    const videoData = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIds.join(',')}&key=${youtubeApiKey}`);
    return videoData.json();
}

async function youtubeData() {
    const playlistData = await youtubePlaylistData();
    const videoData = await youtubeSingleVideoData(playlistData);
    return (
        <div>

            <pre>{JSON.stringify(videoData, null, 2,)}</pre>
        </div>
    );
}

export default youtubeData;