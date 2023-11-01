import Image from "next/image";
import Link from "next/link";
async function getYoutubePlayListData() {
  const apiKey = "AIzaSyD8tAgjH9mE1injUVe0BzhZ-EsgiuGwYoQ";
  const playlistId = "PLBPVr0JQZNobnoYWApfoEi2qbuY3QRwTU";
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const Comp = async () => {
  const data = await getYoutubePlayListData();
  return (
    <>
      {data.items.map((item) => {
        try {
          return (
            <Link href=''>
              <div className='grid grid-cols-[auto_1fr] gap-3 mb-3 '>
                <Image
                  alt='test'
                  src={item.snippet.thumbnails.default.url}
                  width='120'
                  height='90'
                  className='rounded '
                />
                <div className=''>
                  <div className=''>{item.snippet.title}</div>
                  <div className=''>{item.snippet.videoOwnerChannelTitle}</div>
                </div>
              </div>
            </Link>
          );
        } catch (error) {
          return null;
        }
      })}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  );
};

export default Comp;
