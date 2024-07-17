import React from 'react'

function Card({ data }) {
   
    return (
        <div className='w-64 h-64 flex gap-2 flex-col'>
            <div className='relative'>
                <span className='absolute  bottom-3 right-3  text-sm bg-gray-700 px-2 py-2 z-10'>{data.videoDuration} </span>
                <img src={data.videoThumbnail}
                    className='h-44 w-72'
                    alt="Thumbnail" />
            </div>
            <div className='flex gap-2'>
                <div>
                    <a href="#">
                        <img src={data.channelInfo.image} alt="channel image" className='rounded-full' />
                    </a>
                </div>
                <div>
                    <h3>
                        <a href='#' className='line-clamp-2 '>
                            {data.videoTitle}
                        </a>
                    </h3>
                    <div className='text-sm text-gray-400'>
                        <div>
                            <a href='#' className='hover:text-white '>
                                {data.channelInfo.name}
                            </a>
                        </div>
                        <div>
                            <span className="after:content-['•'] after:mx-1">
                                {data.videoViews} views
                            </span>
                            <span>
                                {data.videoAge}
                            </span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Card