import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

const youtubePlaylistId = process.env.YOUTUBE_PLAYLIST_ID;
const youtubeApiKey = process.env.YOUTUBE_API_KEY;

async function youtubePlaylistData() {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLBPVr0JQZNobnoYWApfoEi2qbuY3QRwTU&key=AIzaSyD8tAgjH9mE1injUVe0BzhZ-EsgiuGwYoQ`);
    return response.json();
}

async function youtubeSingleVideoData(youtubePlaylistData) {
    const videoIds = youtubePlaylistData.items.map(item => item.snippet.resourceId.videoId);

    const videoData = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIds.join(',')}&key=${youtubeApiKey}`);
    return videoData.json();
}

const youtubeData = async () => {
    const playlistData = await youtubePlaylistData();
    const videoData = await youtubeSingleVideoData(playlistData);
    return (
        <>


            <div className="space-y-3">
                {videoData.items.map((item) => {
                    return (
                        <div className="">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                            <div className="w-full border-t-2 border-gray-900 border-dotted"/>
                                        </div>
                                        <div className="relative flex items-center justify-between">
                            <span
                                className="bg-white pr-3 hover:pl-3 text-base font-semibold leading-6 text-gray-600 hover:text-gray-900 truncate">{item.snippet.title}</span>
                                            <div

                                                className="inline-flex items-center gap-x-1.5 bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 "
                                            >

                                                <span>bla</span>
                                            </div>
                                        </div>
                                    </div>
                                </HoverCardTrigger>

                                <HoverCardContent>
                                    {item.snippet.title}
                                </HoverCardContent>

                            </HoverCard>
                        </div>
                    )
                })}

            </div>

        </>
    );
}

export default youtubeData;