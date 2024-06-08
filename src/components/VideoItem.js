import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" onClick={() => onVideoSelect(video)} style={{ cursor: 'pointer' }}>
      <div className="card">
        <div className="video-image-container">
          <img src={video.thumbnail} className="card-img-top" alt={video.title} />
          <span className="video-duration">{formatDuration(video.duration)}</span>
        </div>
        <div className="card-body">
          <h5 className="video-title">{video.title}</h5>
          <p className="video-info">
            {video.views} • {video.uploadDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
