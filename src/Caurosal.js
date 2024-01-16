import { HeartIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function CaurosalComponent() {
    return (
        <Carousel showArrows={false} autoPlay showThumbs={false} showStatus={false}>
            {[1, 2, 4, 5].map((item) => (<div className='h-full relative'>
                <img className="h-full object-cover" src="https://images.unsplash.com/photo-1615966650071-855b15f29ad1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bG92ZSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D" />
                <div className='flex flex-col gap-2 w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg md:text-5xl'>
                    <div>Keerti & Abhinandan are getting married!</div>
                    <div className='flex items-center gap-x-3'>
                        <div className='h-[2px] bg-white w-full' />
                        <HeartIcon className="h-6 w-6 min-w-6 text-white" />
                        <HeartIcon className="h-8 w-8 min-w-8 text-white" />
                        <HeartIcon className="h-6 w-6 min-w-6 text-white" />
                        <div className='h-[2px] bg-white w-full' />
                    </div>
                    <div>Save the Date 19 Feb 2024</div>
                </div>
            </div>))}
        </Carousel>
    )
}

export default CaurosalComponent

