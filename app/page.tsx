import FeaturesTab from "./components/FeaturesTab";
import GalleryTab from "./components/GalleryTab";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-black flex justify-center items-center">
        <div className="w-[90%] h-[90%] rounded-3xl bg-mainBg">

          <div className="w-3/4 lg:w-2/3 xl:w-1/2 h-full float-end flex flex-col justify-center gap-5">
            <FeaturesTab />
            <hr className="h-1 rounded-full w-[70%] ml-14 bg-card" />
            <GalleryTab />
            <hr className="h-1 rounded-full w-[70%] ml-14 bg-card" />

          </div>
        </div>
      </div>
    </>
  );
}
