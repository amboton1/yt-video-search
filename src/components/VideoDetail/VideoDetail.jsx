import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({ selectedVideo }) => {
    if (!selectedVideo) {
        return null;
    }

    return (
        <div className="video-detail">
            <div className="video">
                <iframe title="yt-player" src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`} frameBorder="0" />
            </div>
            <div className="content">
                <h2 className="title">{selectedVideo.snippet.title}</h2>
                <p className="description">{selectedVideo.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;