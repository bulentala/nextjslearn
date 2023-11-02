import Image from "next/image";
import Link from "next/link";
async function fetchYoutubePlaylistData() {
  const apiKey = "AIzaSyD8tAgjH9mE1injUVe0BzhZ-EsgiuGwYoQ";
  const playlistId = "PLBPVr0JQZNobnoYWApfoEi2qbuY3QRwTU";
  const maxResults = "50";
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playlistId}&key=${apiKey}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
const Comp = async () => {
  const data = await fetchYoutubePlaylistData();
  return (
    <>
      {data.items.map((video) => {
        const {
          title,
          videoOwnerChannelTitle,
          thumbnails: {
            default: { url },
          },
        } = video.snippet;

        return (
          <Link href='' key={video.id}>
            <div className='grid grid-cols-[auto_1fr] gap-3 mb-3'>
              <Image
                alt={title}
                src={url}
                width={120}
                height={90}
                className='rounded'
              />
              <div>
                <div>{title}</div>
                <div>{videoOwnerChannelTitle}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Comp;
