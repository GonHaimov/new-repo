import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import VideoList from '../components/VideoList';
import videosData from '../videos.json';

const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setVideos(videosData);
  }, []);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
    </div>
  );
};

export default HomePage;
