import React, { useState } from 'react';
import Search from './Search/Search';
import './App.css';
import youtube from './api/youtube';
import VideoList from './VideoList/VideoList';
import VideoDetail from './VideoDetail/VideoDetail';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const onFormSubmit = async term => {
        const results = await youtube.get('/search', {
            params: {
                q: term,
            }
        });
        setVideos(results.data.items);
        setSelectedVideo(results.data.items[0]);
    }

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    }

    return (
        <div className="container">
            <Search onFormSubmit={onFormSubmit} />
            <section className="video-section">
                <VideoDetail selectedVideo={selectedVideo} />
                <VideoList onVideoSelect={onVideoSelect} videos={videos} />
            </section>
        </div>
    );
}

export default App;