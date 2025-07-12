const VideoTitle=({title,overview})=>{
    return (
        <div className=" w-screen aspect-video py-[18%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="p-6 text-lg w-1/2">{overview}</p>
        <div className="">
            <button className="bg-white text-black p-4 px-10  rounded-lg cursor-pointer hover:opacity-50">▶ Play</button>
            <button className="bg-gray-500 text-white p-4 px-10 opacity-50 rounded-lg mx-2 cursor-pointer">More Info</button>
        </div>
        </div>
    )
}
export default VideoTitle