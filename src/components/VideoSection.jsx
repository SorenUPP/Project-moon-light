import React from 'react';

const VideoSection = () => {
  return (
    <section id="videos" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 flex justify-center">
        <div className="w-full max-w-5xl aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/o7GuykLJqUw?autoplay=1&mute=1&loop=1&playlist=o7GuykLJqUw&controls=0&modestbranding=1&showinfo=0&rel=0"
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
