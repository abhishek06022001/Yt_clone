import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../hooks/useApp'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';
import Spinner from '../components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../components/Card';

function Home() {
    const dispatch = useAppDispatch(); // used to dispatch action to the store . 
    const videos = useAppSelector((state) => state.youtubeApp.videos);
    // selected the current videos from the state 
    // home load hua dispatch kiya action ko and that gets stored in videos somewhere where we can access it anyhow 
    // any component can use the videos from store.

    useEffect(() => {
        dispatch(getHomePageVideos(false));
    }, [dispatch]);
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
                    videos.length ? (
                        <InfiniteScroll
                            dataLength={videos.length}
                            next={() => dispatch(getHomePageVideos(true))}
                            hasMore={videos.length < 500}
                            loader={<Spinner />}
                            height={650}
                        >
                            <div className='grid gap-y-14 gap-x-8 grid-cols-4 p-8'>
                                {videos.map((item) => {
                                    return <Card data={item} key={item.videoId} />
                                })}
                            </div>
                        </InfiniteScroll>
                    ) : (
                        <Spinner />
                    )
                }
            </div>
        </div>
    )
}
export default Home