import Comp from "@/components/Comp";
const HomePage = async () => {
  return (
    <>
      <div className="mx-auto grid min-h-screen max-w-5xl  grid-rows-[_auto_1fr_auto] border border-red-500 p-2">
        <header className="grid grid-cols-[_auto_1fr_auto] border border-red-500">
          <logo className="col-start-1 border border-red-500">Logo</logo>
          <nav className="col-start-3 border border-red-500 ">Nav</nav>
        </header>
        <main className="border border-red-500">
          <div className="m-5 border border-red-500">
            <div>Traversy Media</div>
            <Comp playlistId={`${process.env.TRAVERSYMEDIA_PLAYLIST_ID}`} />
          </div>
          <Comp playlistId={`${process.env.PROGRAMMINGWITHMOSH_PLAYLIST_ID}`} />
        </main>
        <footer className="border border-red-500">footer</footer>
      </div>
    </>
  );
};

export default HomePage;
