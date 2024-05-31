import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="card mb-3" onClick={() => onVideoSelect(video)} style={{cursor: 'pointer'}}>
      <img src={`path/to/thumbnail/${video.id}.jpg`} className="card-img-top" alt={video.title} />
      <div className="card-body">
        <h5 className="card-title">{video.title}</h5>
        <p className="card-text">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoItem;
