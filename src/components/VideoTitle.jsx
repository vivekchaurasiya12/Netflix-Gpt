

const VideoTitle = ({ title,overview }) => {

    return (
        <div className="w-screen aspect-video pt-36 px-16 absolute bg-gradient-to-r from-black to-transparent"> 
            <h1 className="text-6xl font-bold text-white">{title}</h1>
            <p  className="py-6 text-base w-1/4 text-white">{overview}</p>
            <div className="flex gap-3">
                <button className="bg-white text-black py-2 px-8 rounded-md hover:bg-opacity-80">
                ▷  
      Play</button>
                <button className="bg-gray-400 text-white py-2 px-8 rounded-md">ⓘ More Info</button>
            </div>
        </div>
    );
}
export default VideoTitle;