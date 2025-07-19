const VideoTitle=({title,overview})=>{
    return (
        <div className=" w-screen aspect-video py-[18%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-lg  pt-20 md:text-3xl font-bold drop-shadow-lg">{title}</h1>
        <p className="hidden  md:inline-block p-6 text-lg w-1/2 drop-shadow-md">{overview}</p>
        <div className="py-60  md:py-20">
            <button className="bg-white  text-black py-1 md: p-4 px-3 md:px-10 md:py-4  rounded-lg cursor-pointer hover:opacity-50">▶ Play</button>
            <button className="hidden  md:inline-block bg-gray-500 text-white p-4 px-10 opacity-50 rounded-lg mx-2 cursor-pointer">More Info</button>
        </div>
        </div>
    )
}
export default VideoTitle