

const VideoTitle = ({ title,overview }) => {
    const truncatedOverview =
    overview && overview.length > 350
      ? overview.slice(0, 350) + "..."
      : overview;
    return (
        <div className="w-full aspect-video pt-16 sm:pt-36 px-4 sm:px-16 absolute bg-gradient-to-r from-black to-transparent">
  <h1 className="text-3xl sm:text-6xl font-bold text-white">{title}</h1>
  <p className="py-4 sm:py-6 text-sm sm:text-base w-full sm:w-1/4 text-white">
    {truncatedOverview}
  </p>
  <div className="flex gap-3">
    <button className="bg-white text-black py-2 px-4 sm:px-8 rounded-md hover:bg-opacity-80">
      ▷ Play
    </button>
    <button className="bg-gray-400 text-white py-2 px-4 sm:px-8 rounded-md">
      ⓘ More Info
    </button>
  </div>
</div>
    );
}
export default VideoTitle;