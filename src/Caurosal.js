import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function CaurosalComponent() {
    return (
        <Carousel showArrows={false} autoPlay showThumbs={false}>
            {[1, 2, 4, 5].map((item) => (<div className='h-full'>
                <img className="h-full object-cover" src="https://images.unsplash.com/photo-1615966650071-855b15f29ad1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bG92ZSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D" />
            </div>))}
        </Carousel>
    )
}

export default CaurosalComponent

