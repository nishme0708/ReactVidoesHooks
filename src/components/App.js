import React, {useState, useEffect} from 'react';
import Search from './Search';
import Youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = ()=>{
    const [videos,setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleSearch = (searchTerm)=>{
        Youtube.get('/search', {
            params: {
                q: searchTerm
            }
        })
            .then((res) => res.data.items)
            .then((res) => {
                setVideos(res);
                setSelectedVideo(res[0]);
            });
    };
    useEffect(()=>{
        handleSearch('trending');
    },[]);

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
