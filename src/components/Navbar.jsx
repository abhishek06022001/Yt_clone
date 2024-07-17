import React from 'react'
import { CiSearch } from 'react-icons/ci';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoYoutube } from 'react-icons/io';
import { FaMicrophone, FaRegBell } from "react-icons/fa6";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { FaBell } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useApp';
import { clearVideos } from '../features/youtube/youtubeSlice';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';
function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
    const handleSearch = () => {
        if (location.pathname !== "/search") {
            navigate("/search");
        } else {
            dispatch(clearVideos);
            dispatch(getSearchPageVideos(false));
        }
    }
    return (
        <div className='flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky  text-white'>
            <div className='flex gap-8 items-center text-2xl'>
                <div>
                    <GiHamburgerMenu />
                </div>
                <div className='flex gap-2 items-center justify-center'>
                    <IoLogoYoutube className='text-3xl text-red-500' />
                    <span className='text-2xl '>Youtube</span>
                </div>
            </div>
            <div className='flex justify-center items-center gap-5'>
                <form action="" onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                }}>
                    <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl'>
                        <div className='flex gap-3 items-center'>
                            <input
                                type="text"
                                placeholder='Search'
                                className='w-96 bg-zinc-900 border-none focus:outline-none text-sm'
                                value={searchTerm}
                                onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
                            />
                        </div>
                        <button className='h-10 w-16 flex justify-center items-center bg-zinc-800  rounded-r-3xl'>
                            <CiSearch className=' text-xl  ' />
                        </button>

                    </div>
                </form>
                <div className='text-xl p-3 bg-zinc-900  rounded-3xl'>
                    <FaMicrophone />
                </div>


            </div>
            <div className='flex items-center gap-8 text-xl'>
                <AiOutlineVideoCameraAdd />
                <div className='relative'>
                    <FaRegBell />
                    <span className='absolute bottom-2 left-2 text-xs bg-red-500 rounded-full px-1'>
                        9+
                    </span>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmpnygUXVGYgqKOvN2DuXP9wfVod1dkqckw&s" alt="profile logo"
                    className='h-9 w-9  rounded-full' />
            </div>
        </div>
    )
}

export default Navbar