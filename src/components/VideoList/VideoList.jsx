import React from 'react';
import VideoItem from './VideoItem/VideoItem';
import './VideoList.css';

const VideoList = ({ videos, onVideoSelect }) => {
    const listOfVideos = videos.map((video, index) => {
        return (
            <VideoItem key={index} video={video} onVideoSelect={onVideoSelect} />
        )
    })

    return (
        <div className="video-list">
            {listOfVideos}
        </div>
    );
}

export default VideoList;