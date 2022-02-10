import {useEffect, useState} from 'react';
import youtube from '../apis/youtube';

const useVideo = (searchTerm) => {

    const [videos,setVideos] = useState([]);


    const handleSearch = (searchTerm) => {
        youtube.get('/search', {
            params: {
                q: searchTerm
            }
        })
            .then((res) => res.data.items)
            .then((res) => {
                setVideos(res);
            });
    };
    useEffect(() => {
        handleSearch(searchTerm);
    }, []);

    return [videos, handleSearch];
};
export default useVideo;
