import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../hooks/useApp'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';
import Spinner from '../components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import { clearVideos } from '../features/youtube/youtubeSlice';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';

function Home() {
    const dispatch = useAppDispatch();
    const videos = useAppSelector((state) => state.youtubeApp.videos);
    const navigate = useNavigate();
    const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
    useEffect(() => {
        dispatch(clearVideos());
        if (searchTerm === "") {
            navigate("/");
        } else {
            dispatch(getSearchPageVideos(false));
        }

    }, [dispatch, navigate, searchTerm]);
    useEffect(() => {
        console.log("videos are", videos);
    }, [videos]);
    return (
        <div className='max-h-screen overflow-hidden'>
            <div style={{ height: "7.5vh" }}>
                <Navbar />
            </div>
            <div className='flex' style={{ height: "92.5vh" }}>
                <Sidebar />
                {
                    (videos.length) ? (
                        <InfiniteScroll
                            dataLength={videos.length}
                            next={() => dispatch(getSearchPageVideos(true))}
                            hasMore={videos.length < 500}
                            Loader={<Spinner />}
                            height={650}

                        >
                            <div className='grid gap-y-14 gap-x-12 grid-cols-4 p-8'>
                                {videos.map((item) => {
                                    return <Card data={item} key={item.videoId}></Card>
                                })}
                            </div>

                        </InfiniteScroll>
                    ) : (
                        <Spinner />
                    )
                }
            </div>
        </div >
    )
}
export default Home