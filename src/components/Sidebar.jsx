import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { LuThumbsUp } from "react-icons/lu";
function Sidebar() {
    const mainLinks = [
        {
            icon: <AiFillHome className='text-xl' />,
            name: 'Home'
        },
        {
            icon: <SiYoutubeshorts className='text-xl' />,
            name: 'Shorts',

        }, {
            icon: <MdSubscriptions className='text-xl' ></MdSubscriptions>,
            name: 'Subscription'
        }
    ]
    const otherLinks = [
        {
            icon: <MdOutlineVideoLibrary className='text-xl' />,
            name: "library"
        },
        {
            icon: <MdHistory className='text-xl' />,
            name: "History"
        },
        {
            icon: <MdOutlineVideoLibrary className='text-xl' />,
            name: "watch Later",
        }, {
            icon: <LuThumbsUp className='text-xl' />,
            name: "Linked "
        }
    ]
    return (
        <div className='w-2/12 bg-[#212121] pl-2 pr-2 pb-8 overflow-auto h-screen'>
            <ul className='flex flex-col border-b-2 border-b-slate-100'>
                {mainLinks.map((item) => {
                    return <li key={name} className={` pl-6 py-3 hover:bg-zinc-600 rounded ${item.name === "Home" ? " bg-zinc-800" : " "}`} >
                        <a href="#" className='flex items-center gap-5'>{item.icon}
                            <span className='text-sm tracking-wider'>{item.name}</span>
                        </a>
                    </li>
                })}
            </ul>
            <ul className='flex flex-col '>
                {otherLinks.map((item) => {
                    return <li key={name} className={` pl-6 py-3 hover:bg-zinc-600  rounded ${item.name === "Home" ? " bg-zinc-800" : " "} `} >
                        <a href="#" className='flex items-center gap-5'>{item.icon}
                            <span className='text-sm tracking-wider'>{item.name}</span>
                        </a>
                    </li>
                })}
            </ul>
        </div >
    )
}

export default Sidebar