import React, { useState, useEffect } from 'react';
import Header from '../components/Header'; // Add this import
import VideoList from '../components/VideoList';
import videosData from '../videos.json';

const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    setVideos(videosData);
    setFilteredVideos(videosData);
  }, []);

  const handleVideoSelect = (selectedVideo) => {
    window.open(selectedVideo.url, '_blank');
  };

  const handleSearch = (query) => {
    const results = videos.filter((video) =>
      video.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredVideos(results);
  };

  return (
    <div className="container">
      <Header onSearch={handleSearch} />
      <VideoList videos={filteredVideos} onVideoSelect={handleVideoSelect} />
    </div>
  );
};

export default HomePage;
