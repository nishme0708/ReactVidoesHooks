import React, { useState, useEffect } from 'react';
import Search from './Search';
import Youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideo from '../hooks/useVideo';

const App = () => {
    const [ selectedVideo, setSelectedVideo ] = useState(null);

    const [ videos, handleSearch ] = useVideo('trending');

    useEffect(()=>{
        setSelectedVideo(videos[0]);
    },[videos]);

    return (
        <div className='ui container'>
            <Search onSearch={handleSearch} />
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className='five wide column'>
                        <VideoList videos={videos} setSelectedVideo={setSelectedVideo} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
