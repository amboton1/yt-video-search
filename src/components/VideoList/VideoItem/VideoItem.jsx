import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item">
            <img src={video.snippet.thumbnails.default.url} alt="yt-img" />
            <h2 className="title">{video.snippet.title}</h2>
        </div>
    );
}

export default VideoItem;