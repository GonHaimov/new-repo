import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedVideos = videos.map((video) => {
    return <VideoItem key={video.id} video={video} onVideoSelect={onVideoSelect} />;
  });

  return <div className="row">{renderedVideos}</div>;
};

export default VideoList;
