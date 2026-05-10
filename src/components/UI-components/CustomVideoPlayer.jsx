import { useState } from "react";

function CustomVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      
      {!isPlaying && (
        <div
          className="relative cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          <img
            src="https://images.unsplash.com/photo-1657886708649-eda40992a10f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="video thumbnail"
            className="w-full rounded-2xl"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
              ▶
            </div>
          </div>
        </div>
      )}

      {isPlaying && (
        <video
          controls
          autoPlay
          width="1000" height="540"
          className="w-full rounded-2xl"
        >
          <source src="/movie/movie.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

export default CustomVideoPlayer;
