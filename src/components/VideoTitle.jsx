

const VideoTitle = ({ title,overview }) => {

    return (
        <div className="pt-36 px-12">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p  className="py-6 text-lg w-1/4">{overview}</p>
            <div className="flex gap-3">
                <button className="bg-gray-400 text-black py-4 px-12">▷ Play</button>
                <button className="bg-gray-400 text-black py-4 px-12">ⓘ More Info</button>
            </div>
        </div>
    );
}
export default VideoTitle;