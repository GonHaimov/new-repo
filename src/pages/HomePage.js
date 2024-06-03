import React, { useState, useEffect } from 'react';
import VideoList from '../components/VideoList';
import videosData from '../videos.json';

const HomePage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(videosData);
  }, []);

  const handleVideoSelect = (selectedVideo) => {
    window.open(selectedVideo.url, '_blank');
  };

  return (
    <div className="container">
      <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
    </div>
  );
};

export default HomePage;