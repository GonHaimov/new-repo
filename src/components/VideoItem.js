import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" onClick={() => onVideoSelect(video)} style={{ cursor: 'pointer' }}>
      <div className="card">
        <img src={video.thumbnail} className="card-img-top" alt={video.title} />
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
