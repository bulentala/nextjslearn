import Comp from "./components/comp";
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
      {/* <Comp /> */}
      {videoData.map((videos) => {
        return videos.items.map((video) => {
          return (
            <div key={video.id}>
              <div className=' grid grid-cols-[_auto_1fr_auto] mt-3'>
                <div className=''>{video.snippet.title}</div>
                <div className=' col-start-3'>
                  {moment(video.snippet.publishedAt).format("MMM YY")}
                </div>
              </div>
              <div className=' grid grid-cols-[_auto_auto_auto_auto_auto_auto_1fr] mt-1 text-gray-400 items-center gap-2 font-mono text-xs'>
                <div className=''>
                  <PersonIcon />
                </div>
                <div className=''>{video.snippet.channelTitle}</div>
                <div className=''>
                  <EyeOpenIcon />
                </div>
                <div className=''>{video.statistics.viewCount}</div>
                <div className=''>
                  <HeartIcon />
                </div>
                <div className=''>{video.statistics.likeCount}</div>
                <div className=''></div>
              </div>
            </div>
          );
        });
      })}
    </>
  );
};

export default HomePage;
