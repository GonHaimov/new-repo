import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div className="container">
      <div className="row">
        {videos.map(video => (
          <div className="col-md-3" key={video.id}>
            <VideoItem video={video} onVideoSelect={onVideoSelect} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
